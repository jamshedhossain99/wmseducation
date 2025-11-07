<!DOCTYPE html>
<!-- saved from url=(0045)https://dizer-bootstrap.vercel.app/index.html -->
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  
    <title><?php echo Config::htmlTitle(); ?></title>

    <base href="<?php echo Config::base(); ?>">
    <meta name="theme-name" content="dizer">

    <!-- mobile responsive meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- ** Plugins Needed for the Project ** -->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/plugins/themify/css/themify-icons.css">
    <link rel="stylesheet" href="/plugins/fontawesome/css/all.css">
    <link rel="stylesheet" href="/assets/css/aos.css">
    <link rel="stylesheet" href="/assets/css/magnific-popup.css">
    <link rel="stylesheet" href="/assets/css/slick.css">

    <!-- Main Stylesheet -->
    <link href="/assets/css/style.css" rel="stylesheet">
    
    <!--Favicon-->
    <link rel="shortcut icon" href="https://dizer-bootstrap.vercel.app/images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="https://dizer-bootstrap.vercel.app/images/favicon.ico" type="image/x-icon">

<!-- <script type="text/javascript" charset="UTF-8" src="/assets/js/common.js"></script> -->
<!-- <script type="text/javascript" charset="UTF-8" src="/assets/js/util.js"></script> -->
</head>

<body data-bs-spy="scroll" data-bs-target="#main-menubar" data-bs-smooth-scroll="true" tabindex="0" class="position-relative">

<?php
    include_once('./components/layout/menu.php');
?>