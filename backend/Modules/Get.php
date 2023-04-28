<?php

class Get{

    protected $pdo,$gm;

    public function __construct(\PDO $pdo){
        $this->gm = new GlobalMethods($pdo);
        $this->pdo = $pdo;

    }


    public function get_accounts($id=null){
        $sql = "SELECT * FROM accounts";

        $result= $this->gm->exec_query($sql);

        return $result;
    }

    public function get_profile($id=null){
        try{
            $sql = "SELECT * from profiles where stud_num = $id";
            $data = $this->gm->exec_query($sql);
            if($data['code']==200){
                return $data['data'][0];
            }
        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Fail to get profile Information",200);
        }
        
        
    }

    public function get_lb_points(){
        $sql = "SELECT * from profiles ORDER BY points DESC";

        $result = $this->gm->exec_query($sql);

        if($result['code']==200){
            return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
        }
        else{
            return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
        }
    }

    public function get_lb_lvl(){
        $sql = "SELECT * from profiles ORDER BY lvl DESC";

        $result = $this->gm->exec_query($sql);

        if($result['code']==200){
            return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
        }
        else{
            return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
        }
    }

    public function get_activity(){
        $sql = "SELECT * from activity ORDER BY deadline DESC";

        $result = $this->gm->exec_query($sql);

        if($result['code']==200){
            return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
        }
        else{
            return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
        }
    }

    public function get_posts(){
        $sql = "SELECT * from posts ORDER BY date DESC";

        $result = $this->gm->exec_query($sql);

        if($result['code']==200){
            return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
        }
        else{
            return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
        }
    }

    public function select_activity($id){
        try{
            $sql = "SELECT * FROM activity where id='$id'";
            $result = $this->gm->exec_query($sql);

            if($result['code']==200){
                return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
            }
            else{
                return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
            }
        }
        catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",200);
        }

    }

    public function get_finished_submits($id){
        try{
            $sql="select count(*) from submits where status=2 and stud_num=$id";
            $result = $this->gm->exec_query($sql);
            return $result;
            
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",200);
        }
    }
    public function get_submitted_submits($id){
        try{
            $sql="select count(*) from submits where status=1 and stud_num=$id";
            $result = $this->gm->exec_query($sql);
            if($result['code']=200){
                return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
            }
            else{
                return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
            }
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",200);
        }
    }

    public function get_role($email){
        try{
            $sql = "select * from accounts where email='$email'";
            $res = $this->gm->exec_query($sql);
            if($result['code']=200){
                return $this->gm->response_payload($res,"Success","Successfuly Retrieved Data",$result['code']);
            }
            else{
                return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
            }
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",400);
        }
    }
    public function get_list_submition($id){
        try{
            $sql = "select * from submits where act_id='$id' AND status=1";
            $res = $this->gm->exec_query($sql);

            if($res['code']=200){
                return $this->gm->response_payload($res,"Success","Successfuly Retrieved Data",$res['code']);
            }else{
                return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$res['code']);
            }
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",400);
        }
    }
    public function get_list_profile(){
        $sql = "SELECT * FROM profiles";

        $result= $this->gm->exec_query($sql);

        return $result;
    }

    public function get_list_unverified(){
        $sql = "SELECT * FROM unverified";

        $result= $this->gm->exec_query($sql);

        return $result;
    }
    public function download ($act,$stud){
        try{
            $sql = "SELECT * FROM submits where act_id='$act' AND stud_num=$stud AND status=1";
            $stmt = $this->gm->exec_query($sql);
            if($stmt['code']==200){
                $filename = $stmt['data'][0]['file_name'];
                $filepath = $stmt['data'][0]['file_loc'];
                return readfile($filepath);
            }
        }catch(\PDOException $e){
            return $this->gm->response_payload($e,"Fail","Failed",400);
        }
    }

    public function board_points(){
        $sql = "SELECT * FROM profiles ORDER BY points DESC";

        $result= $this->gm->exec_query($sql);

        return $result;
    }

    public function board_lvl(){
        $sql = "SELECT * FROM profiles ORDER BY lvl DESC";

        $result= $this->gm->exec_query($sql);

        return $result;
    }

    public function get_students_submits($id){
        try{
            $sql="select count(*) from submits where stud_num=$id";
            $result = $this->gm->exec_query($sql);
            return $result;
            
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",200);
        }
    }

    public function get_submits($id){
        try{
            $sql="select * from submits where stud_num=$id";
            $result = $this->gm->exec_query($sql);
            return $this->gm->response_payload($result,"success","success",200);
            
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",200);
        }
    }

    public function check_dup_submit($stud_num,$act_id){
        try{
            $sql="select * from submits where stud_num=$stud_num and act_id='$act_id' and status=1";
            $stmt= $this->pdo->prepare($sql);
            $stmt->execute();
            $row = $stmt->rowCount();
            if($row>=1){
                return true;
            }
            else{
                return false;
            }
        }catch(\PDOException $e){
            return $this->gm->response_payload(null,"Fail","Unable to fetch data",200);
        }
    }
}