<?php
    require_once "./config/Connection.php";
    require_once "./Modules/Global.php";
    require_once "./Modules/Get.php";


    $db = new Connection;
    $pdo = $db->connect();

    $get = new Get($pdo);


    if(isset($_REQUEST['request'])){
        $req = explode('/', rtrim($_REQUEST['request'], '/') );
    
    }
    else{
        http_response_code(404);
    }

    if($_SERVER['REQUEST_METHOD'] ==='OPTIONS'){
        header('HTTP/1.1 200 OK');
        exit();
    }

    switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
            switch($req[0]){
                case 'account':
                    echo json_encode($get->get_accounts());
                break;
            }
        
        break;

        case 'POST':
            echo "Post";
        
        break;

        case 'PATCH':
            echo 'Patch';
        
        break;

        
        default:
            http_response_code(403);
        break;





    }
