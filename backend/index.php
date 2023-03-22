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

                case 'profile':
                    if(count($req)>1){
                        echo json_encode($get->get_profile($req[1]));
                    }
                break;

                case 'lb_points':
                    echo json_encode($get->get_lb_points());
                break;

                case 'lb_lvl':
                    echo json_encode($get->get_lb_lvl());
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
