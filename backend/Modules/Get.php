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
        $sql = "SELECT * FROM profiles where stud_num=$id";

        $result=$this->gm->exec_query($sql);

        if($result['code']==200){
            return $this->gm->response_payload($result,"Success","Successfuly Retrieved Data",$result['code']);
        }
        else{
            return $this->gm->response_payload(null,"Failed","Unable to Retrieved Data",$result['code']);
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

}