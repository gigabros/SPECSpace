<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE, PATCH");

date_default_timezone_set("Asia/Manila");

define("SERVER", "localhost");
define("DBASE", "u418990563_specspace");
define("USER", "u418990563_user");
define("PASSWORD", "1+Je8MODXNuL");

class Connection{
    protected $con_string = "mysql:host=".SERVER.";dbname=".DBASE."; charset=utf8mb4";
    protected $options = [
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
        \PDO::ATTR_EMULATE_PREPARES => false
    ];

    public function connect(){
        return new \PDO($this->con_string, USER, PASSWORD, $this->options);
    }
}