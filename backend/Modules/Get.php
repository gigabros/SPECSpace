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

}