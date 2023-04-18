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
            $sql="select count(*) from submits where status=0";
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
    public function get_submitted_submits($id){
        try{
            $sql="select count(*) from submits where status=1";
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
}