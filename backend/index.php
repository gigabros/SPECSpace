<?php
    require_once "./config/Connection.php";
    require_once "./Modules/Global.php";
    require_once "./Modules/Get.php";
    require_once "./Modules/Post.php";
    require_once "./Modules/Lvl.php";


    $db = new Connection;
    $pdo = $db->connect();

    $get = new Get($pdo);
    $post = new Post($pdo);
    $add_lvl = new addlvl();
    $data = json_decode(file_get_contents("php://input"));

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

                case 'activity':
                    echo json_encode($get->get_activity()); 
                break;

                case 'select_activity':
                    echo json_encode($get->select_activity($req[1])); 
                break;
                
                case "date":
                    echo date("h:i a/ d-m-Y");
                break;
            }
        
        break;

        case 'POST':
            switch($req[0]){
                case "add_activity":
                    echo json_encode($post->add_activity($data));
                break;

                case "add_post":
                    echo json_encode($post->add_post($data));
                break;

                case "add_account":
                    echo json_encode($post->add_account($data));
                break;

                case "login":
                    echo json_encode($post->login($data));
                break;

                case "submit":
                    echo json_encode($post->submit_activity($data));
                break;

                case "verify":
                    echo json_encode($post->verify_account($data));
                break;

                case "finish":
                    echo json_encode($post->finish_activity($data));
                break;
                case "update_exp_lvl":
                    echo json_encode($post->add_exp_points($req[1],$req[2],$req[3]));
                break;

            }
        
        break;
        

        case 'PATCH':
            echo 'Patch';
        
        break;

        
        default:
            http_response_code(403);
        break;





    }
