<?php

class Post{

    protected $pdo,$gm,$get;

    public function __construct(\PDO $pdo){
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
        $this->get = new Get($pdo);

    }
    
    public function user_exists_account($data){
        $sql="SELECT * FROM accounts WHERE id=?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$data]);

        if($stmt->rowCount()>0){
            return false;
        }
        else{
            return true;
        }
    }
    public function user_exists_unverified($data){
        $sql="SELECT * FROM unverified WHERE id=?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$data]);

        if($stmt->rowCount()>0){
            return false;
        }
        else{
            return true;
        }
    }
    private function generateSalt($saltLength){
        $str = md5(uniqid(mt_rand(), true));
        $b64string = base64_encode($str);
        $mb64string = str_replace("+", ".", $b64string);
        return substr($mb64string, 0, $saltLength);
    }



    public function encrypt_password($pword){
        $hashFormat = "$2y$10$";
        $saltLength = 22;
        $salt = $this->generateSalt($saltLength);
        return crypt($pword, $hashFormat.$salt);
    }

    public function checkPassword($password, $existingPassword){
        return $existingPassword === crypt($password, $existingPassword);
     }

    public function add_profile($id,$name){
        try{
            $sql = "INSERT INTO `profiles`(`stud_num`, `name`, `lvl`, `exp`, `finished`, `submitted`, `points`) 
                VALUES (?,?,1,0,0,0,0)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$id,$name]);
            return $this->gm->response_payload($stmt,"Success","Profile is added",200);
        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Fail to make profile",200);
        }

        
    }

    public function add_account($data){
        try{
            $sql = "INSERT INTO unverified (id,email,password,role) VALUES (?,?,?,?)";

            if($this->user_exists_account($data->id) && $this->user_exists_unverified($data->id)){
                if(strlen($data->password) >= 6 && $data->password == $data->conpass){
                    try{
                        
                        $stmt = $this->pdo->prepare($sql);
                        $enc_pass= $this->encrypt_password($data->password);
                        $stmt->execute([$data->id,$data->email,$enc_pass,"Student"]);
                        $this->add_profile($data->id,$data->name);
                        return $this->gm->response_payload($data,"Success","Account Successfuly made",200);
                    }
                    catch(\PDOException $e){
                        return $this->gm->response_payload($e,"Fail","Fail to make account",200);
                    }
                }
                else{
                    return $this->gm->response_payload(null,"Fail","Password is either too short or does not match",200);
                }
            }else{
                return $this->gm->response_payload(null,"Fail","Account Already exists",200);
            }

        }
        catch(\PDOException $e){
            return $this->gm->response_payload($e,"Fail","Something went wrong",200);
        }
    }

    public function delete_unverified($id){
        try{
            $delete = "DELETE FROM unverified where id=?";
            $stmt_delete = $this->pdo->prepare($delete);
            $stmt_delete->execute([$id]);
            return true;
        }catch(\PDOException){
            return false;
        }
    }

    public function verify_account($data){
        try{
            if($this->user_exists_unverified($data->id)){
                return "Account does not exist";
            }
            else{
                $sql = "INSERT INTO `accounts`(`id`, `email`, `password`, `role`) SELECT * FROM unverified where id=?";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->id]);
                $delete = $this->delete_unverified($data->id);    
                return "Account succesfuly verified";    
            }
            
        }catch(\PDOException $e){
            return $e;
        }
    }

    public function login($data){
        $email = $data->email;
        $password = $data->password;
        
        $sql = "SELECT * from accounts where email=? limit 1";

        $stmt = $this->pdo->prepare($sql);
        
        try{
            $stmt->execute([$email]);
            if($stmt->rowCount()>0){
                $res = $stmt->fetchAll()[0];
                
                if($this->checkPassword($password,$res['password'])){
                    return $this->get->get_profile($res['id']);
                }else{
                    return $this->gm->response_payload(null,"Fail","Incorrect password",200);
                }
                    
            }else{
                return $this->gm->response_payload(null,"Fail","Account does not exists", 200);
            }
        }
        catch (\PDOException $e){
            return $this->gm->response_payload(null,"Fail","fail to login",200);
        }
    }
    public function add_activity($data){

       try{
            $gen_id = uniqid("GC_");
            $sql ="INSERT INTO activity (`id`, `subject`, `description`, `attachment`, `deadline`, `points`)
                VALUES (?,?,?,?,?,?)";
            $stmt =$this->pdo->prepare($sql);
            $stmt->execute([$gen_id,$data->subject,$data->description,$data->attachment,$data->deadline,$data->points]);
            return $this->gm->response_payload(null,"Success", "Activity Posted",200);
            
       }
       catch(\PDOException $e){
            return $this->gm->response_payload($e,"Fail","Activity posting Failed",409);
       }

    }

    public function add_post($data){
        try{
            $date = date("h:i a/ d-m-Y");
            $gen_id = uniqid("GC_post_");
            $sql= "INSERT INTO `posts`(`post_id`, `title`, `message`,`date`) VALUES (?,?,?,?)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$gen_id,$data->title,$data->message,$date]);

            return $this->gm->response_payload(null,"Success","The annnoucement is posted",200);
        }
        catch(\PDOException $e){
            return $this->gm->response_payload($e,"fail","Posting Failed",409);
        }
    }
    public function submit_activity($data){
        try{
            $date = date("Y-m-d");
            $activity = $this->get->select_activity($data->id);
            if($activity['payload']['data']['0']['deadline'] >= $date){
                $sql = "INSERT INTO `submits`(`act_id`, `stud_num`, `attachment`) VALUES 
                (?,?,?)";
                $stmt= $this->pdo->prepare($sql);
                $stmt->execute([$activity['payload']['data'][0]['id'],$data->stud_num,$data->attachement]);
                return $this->gm->response_payload(null,"Success","Activity Submitted",200); 
            }
            else{
                return $this->gm->response_payload(null,"Fail","Deadline Overdue",200);
            }
            // $activity_data = $activity['payload']['data'][0]['id'];
            // return $activity_data;

        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Fail Submission",200);
        }
    }

}

    