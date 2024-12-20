<?php

class Post
{

    protected $pdo, $gm, $get, $update_lvl;

    public function __construct(\PDO $pdo)
    {
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;
        $this->get = new Get($pdo);
        $this->update_lvl = new addlvl();
    }

    public function user_exists_account($data)
    {
        $sql = "SELECT * FROM accounts WHERE id=?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$data]);

        if ($stmt->rowCount() > 0) {
            return false;
        } else {
            return true;
        }
    }
    public function user_exists_unverified($data)
    {
        $sql = "SELECT * FROM unverified WHERE id=?";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([$data]);

        if ($stmt->rowCount() > 0) {
            return false;
        } else {
            return true;
        }
    }
    private function generateSalt($saltLength)
    {
        $str = md5(uniqid(mt_rand(), true));
        $b64string = base64_encode($str);
        $mb64string = str_replace("+", ".", $b64string);
        return substr($mb64string, 0, $saltLength);
    }



    public function encrypt_password($pword)
    {
        $hashFormat = "$2y$10$";
        $saltLength = 22;
        $salt = $this->generateSalt($saltLength);
        return crypt($pword, $hashFormat . $salt);
    }

    public function checkPassword($password, $existingPassword)
    {
        return $existingPassword === crypt($password, $existingPassword);
    }

    public function add_profile($stud_num, $fname, $lname, $block, $year)
    {
        try {
            $sql = "INSERT INTO `profiles`(`stud_num`, `first_name`, `last_name`, `block`, `year`, `lvl`, `exp`, `points`) 
                VALUES (?,?,?,?,?,1,0,0)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$stud_num, $fname, $lname, $block, $year]);
            return $this->gm->response_payload($stmt, "Success", "Profile is added", 200);
        } catch (\PDOException $e) {
            return $this->gm->response_payload(null, "Fail", "Fail to make profile", 200);
        }
    }

    public function add_account($data)
    {
        try {
            $sql = "INSERT INTO unverified (first_name,last_name,block,year,id,email,password,role) VALUES (?,?,?,?,?,?,?,?)";

            if ($this->user_exists_account($data->id) && $this->user_exists_unverified($data->id)) {
                if (strlen($data->password) >= 6) {
                    if ($data->password == $data->conpass) {
                        try {

                            $stmt = $this->pdo->prepare($sql);
                            $enc_pass = $this->encrypt_password($data->password);
                            $stmt->execute([$data->first_name, $data->last_name, $data->block, $data->year, $data->id, $data->email, $enc_pass, "Student"]);
                            return $this->gm->response_payload($data, "Success", "Account Successfuly made", 200);
                        } catch (\PDOException $e) {
                            return $this->gm->response_payload($e, "Fail", "Fail to make account", 200);
                        }
                    } else {
                        return $this->gm->response_payload(null, "Password", "Password does not match", 200);
                    }
                } else {
                    return $this->gm->response_payload(null, "Password", "Password should be 6 or more characters", 200);
                }
            } else {
                return $this->gm->response_payload(null, "Account", "Account Already exists", 200);
            }
        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "Fail", "Something went wrong", 200);
        }
    }

    public function delete_unverified($id)
    {
        try {
            $delete = "DELETE FROM unverified where id=?";
            $stmt_delete = $this->pdo->prepare($delete);
            $stmt_delete->execute([$id]);
            return true;
        } catch (\PDOException) {
            return false;
        }
    }

    public function verify_account($data)
    {
        try {
            if ($this->user_exists_unverified($data->id)) {
                return "Account does not exist";
            } else {
                $sql = "INSERT INTO `accounts` (`first_name`, `last_name`, `id`, `email`, `password`, `role`)
                SELECT `first_name`, `last_name`, `id`, `email`, `password`, `role` FROM `unverified` WHERE `id` = ?
                ";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$data->id]);
                $delete = $this->delete_unverified($data->id);
                //($stud_num,$fname,$lname,$block,$year)
                $this->add_profile($data->id, $data->fname, $data->lname, $data->block, $data->year);
                return "Account succesfuly verified";
            }
        } catch (\PDOException $e) {
            return $e;
        }
    }

    public function login($data)
    {
        $email = $data->email;
        $password = $data->password;

        $sql = "SELECT * from accounts where email=? limit 1";

        $stmt = $this->pdo->prepare($sql);

        try {
            $stmt->execute([$email]);
            if ($stmt->rowCount() > 0) {
                $res = $stmt->fetchAll()[0];
                $id = $this->get->get_profile($res['id']);
                if ($this->checkPassword($password, $res['password'])) {
                    return $this->gm->response_payload($id, "Success", "Login Sucessfuly", 200);
                } else {
                    return $this->gm->response_payload(null, "Password", "Incorrect password", 200);
                }
            } else {
                return $this->gm->response_payload(null, "Account", "Account does not exists", 200);
            }
        } catch (\PDOException $e) {
            return $this->gm->response_payload(null, "Fail", "fail to login", 400);
        }
    }

    public function admin_login($data)
    {
        try {
            $email = $data->email;
            $password = $data->password;

            $sql = "SELECT * from accounts where email=? limit 1";
            $stmt = $this->pdo->prepare($sql);

            $stmt->execute([$email]);
            if($stmt->rowCount()>0){
                $res = $stmt->fetchAll()[0];
                if($this->checkPassword($password,$res['password'])){
                    return $this->gm->response_payload(null, "Success", "Login Sucessfuly", 200);
                }
                else {
                    return $this->gm->response_payload(null, "Password", "Incorrect password", 200);
                }
            }
            else {
                return $this->gm->response_payload(null, "Account", "Account does not exists", 200);
            }
        } catch (\PDOException $e) {
            return $this->gm->response_payload(null, "Fail", "fail to login", 400);
        }
    }
    public function add_activity($data)
    {

        try {
            $gen_id = uniqid("GC_");
            $sql = "INSERT INTO activity (`id`, `subject`, `description`, `deadline`, `points`,`exp`)
                VALUES (?,?,?,?,?,?)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$gen_id, $data->subject, $data->description, $data->deadline, $data->points, $data->exp]);
            return $this->gm->response_payload(null, "Success", "Activity Posted", 200);
        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "Fail", "Activity posting Failed", 409);
        }
    }

    public function add_post($data)
    {
        try {
            $date = date("d-m-Y");
            $gen_id = uniqid("GC_post_");
            $sql = "INSERT INTO `posts`(`post_id`, `title`, `message`,`date`) VALUES (?,?,?,?)";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$gen_id, $data->title, $data->message, $date]);

            return $this->gm->response_payload(null, "Success", "The annnoucement is posted", 200);
        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "fail", "Posting Failed", 409);
        }
    }

    // 0=Failed activity
    // 1=Unchecked activity
    // 2=Finished activity

    public function submit_activity($data)
    {
        try {
            $date = date("Y-m-d");
            $activity = $this->get->select_activity($data->id);
            if ($activity['payload']['data']['0']['deadline'] >= $date) {
                $sql = "INSERT INTO `submits`(`act_id`, `stud_num`, `attachment`,`status`,`name`,`date`) VALUES 
                (?,?,?,?,?,?)";
                $stmt = $this->pdo->prepare($sql);
                $stmt->execute([$activity['payload']['data'][0]['id'], $data->stud_num, $data->attachement, 1, $data->name, $date]);
                return $this->gm->response_payload(null, "Success", "Activity Submitted", 200);
            } else {
                return $this->gm->response_payload(null, "Fail", "Deadline Overdue", 200);
            }
            // $activity_data = $activity['payload']['data'][0]['id'];
            // return $activity_data;

        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "Fail", "Fail Submission", 200);
        }
    }

    //Function for finishing activity
    public function check_status($stud_num, $act_id)
    {
        try {
            $sql = "SELECT * from submits where act_id='$act_id' AND stud_num=$stud_num ";
            $stmt = $this->gm->exec_query($sql);
            return $stmt;
        } catch (\PDOException $e) {
        }
    }
    public function add_exp_points($stud_num, $exp, $points)
    {
        try {
            $sql = "UPDATE profiles SET points=points+?,exp=exp+? WHERE stud_num=$stud_num";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$points, $exp]);
            return $this->gm->response_payload(null, "Success", "updated exp and points", 200);
        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "Fail", "failed to updated exp and points", 200);
        }
    }
    public function update_stud_submit($stud_num, $act_id)
    {
        try {
            $sql = "UPDATE submits SET status=2 where act_id='$act_id' AND stud_num=$stud_num";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();
            return $this->gm->response_payload(null, "Success", "updated activity status", 200);
        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "faile", "failed to update activity status", 200);
        }
    }

    public function add_lvl($stud_num, $exp, $lvl)
    {
        try {
            $sql = "UPDATE profiles SET lvl = lvl+$lvl, exp = $exp where stud_num = $stud_num";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();

            return $this->gm->response_payload(null, "Success", "updated lvl and exp", 200);
        } catch (\PDOException $e) {
            return $this->gm->response_payload($e, "Failed", "failed to updated lvl and exp", 200);
        }
    }
    public function finish_activity($data)
    {
        try {
            $status = $this->check_status($data->stud_num, $data->act_id);
            if ($status["data"][0]["status"] == 1) {
                // $activity_info=$this->get->select_activity($data->act_id);
                // $activity_exp = $activity_info["payload"]["data"][0]["exp"];
                // $activity_points = $activity_info["payload"]["data"][0]["points"];
                $this->add_exp_points($data->stud_num, $data->exp, $data->points);
                $this->update_stud_submit($data->stud_num, $data->act_id);

                $profile_info = $this->get->get_profile($data->stud_num);
                $profile_lvl = $profile_info['lvl'];
                $profile_exp = $profile_info['exp'];
                $lvl_exp = $this->update_lvl->add_lvl($profile_lvl, $profile_exp);
                $this->add_lvl($data->stud_num, $lvl_exp[1], $lvl_exp[0]);

                return "tama";
            } else {
                return "rtpos na";
            }
        } catch (\PDOException $e) {
            return $e;
        }
    }

    public function delete_act($data)
    {
        try {
            $sql = "DELETE FROM activity WHERE id=?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$data->act_id]);

            return $this->gm->response_payload($stmt, "success", "Successfuly deleted", 200);
        } catch (\PDOException $e) {
            return $e;
        }
    }

    public function delete_post($data)
    {
        try {
            $sql = "DELETE FROM posts WHERE post_id=?";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute([$data->post_id]);

            return $this->gm->response_payload($stmt, "success", "Successfuly deleted", 200);
        } catch (\PDOException $e) {
            return $e;
        }
    }

    public function reject_submit($data)
    {
        try {
            $sql = "DELETE FROM submits WHERE act_id='$data->act_id' AND stud_num=$data->stud_num";
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute();
            return $this->gm->response_payload($stmt, "Success", "Successfuly delete", 200);
        } catch (\PDOException $e) {
            return $e;
        }
    }

    public function reject_unverify($data)
    {
        try {
            $delete = "DELETE FROM unverified where id=?";
            $stmt_delete = $this->pdo->prepare($delete);
            $stmt_delete->execute([$data->id]);
            return $this->gm->response_payload(null, "Success", "Successfuly deleted", 200);
        } catch (\PDOException $e) {
            return $e;
        }
    }
}
