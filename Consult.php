<?php 
    //$Nombre = $_POST['Nombre'];
    
    function func1($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT i.ID, concat_ws(' ',i.NOMBRE,i.APELLIDOP, i.APELLIDOM) as 'Name', i.EDAD, i.SEXO, i.TIPO, i.ESTATURA,
        (SELECT COUNT(c.FechaConsulta) from consultanormal c WHERE c.IDP = i.ID) as 'Normal', 
        (SELECT COUNT(d.FechaConsulta) from consultadeportista d WHERE d.IDP = i.ID) as 'Deportista'
        FROM infobasica i 
        WHERE concat_ws(' ',i.NOMBRE,i.APELLIDOP, i.APELLIDOM) like '%$data%'";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function funcNormales($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT * FROM `consultanormal` WHERE IDP = '$data'";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function funcDeport($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT c.*, r.* FROM consultadeportista c, resultadosdeportista r WHERE c.IDP = '$data' and r.IDP = '$data' and c.IDP = r.IDP and c.FechaConsulta = r.FechaConsulta" ;
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function resultsDep($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT * FROM `resultadosdeportista` WHERE IDP = '$data[0]' and FechaConsulta <= '$data[1]' ";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function grafresult($datos){
        
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT c.FechaConsulta, c.Peso, r.Brozec, r.Siri,r.Masao,r.masarh,r.masarm,r.rosemm,r.rosep,r.brozeck,r.sirik FROM resultadosdeportista r, consultadeportista c WHERE r.IDP = c.IDP and r.IDP = $datos  AND c.FechaConsulta = r.FechaConsulta ORDER by r.FechaConsulta ASC LIMIT 5 ";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
   
    }

    function lastconsult($data){
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT r.*, c.* FROM resultadosdeportista r, consultadeportista c WHERE c.IDP = r.IDP and c.IDP = '$data' order by r.FechaConsulta DESC LIMIT 1";
        
        if (mysqli_query($conn, $sql)) {
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        print json_encode($new_array);
                    } 
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
    }

    function somatipo($datos){
        
        $conn = mysqli_connect("localhost", "root", "", "pacientes") or die ("Error al conectar");
        $sql = "SELECT i.ESTATURA,(c.Tricep + c.Subescapular + c.Suprae) as 'Sumaplieges',c.Humero,c.Femur,c.BicepRelax,c.Peso,c.Tricep,c.Subescapular,c.Suprae,c.FechaConsulta FROM infobasica i, consultadeportista c WHERE i.ID = c.IDP and i.ID = $datos and c.IDP = $datos order by c.FechaConsulta DESC LIMIT 1";
        
        if (mysqli_query($conn, $sql)) {
                    //$sql = "";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                            $new_array[] = $row;
                            
                        }
                        //echo $new_array;
                        print json_encode($new_array);
                    } 
        
                       //echo "<script>alert('Usuario Guardado exitosamente');</script>";
                    //header('location: index2.php');
              
        } else {
              echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        } 
   
    }

    if (isset($_POST['callFunc1'])) {
        echo func1($_POST['callFunc1']);
    }

    if (isset($_POST['callFuncNormales'])) {
        echo funcNormales($_POST['callFuncNormales']);
    }

    if (isset($_POST['callFuncDeport'])) {
        echo funcDeport($_POST['callFuncDeport']);
    }

    if (isset($_POST['callresultsdep'])) {
        echo resultsDep($_POST['callresultsdep']);
    }

    if (isset($_POST['callgraf'])) {
        echo grafresult($_POST['callgraf']);
    }

    if (isset($_POST['calllastconsult'])) {
        echo lastconsult($_POST['calllastconsult']);
    }

    if (isset($_POST['callsomatipo'])) {
        echo grafresult($_POST['callsomatipo']);
    }

?>