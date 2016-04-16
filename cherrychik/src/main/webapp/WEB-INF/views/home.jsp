<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Cherry Chik</title>

<!-- Style Sheets -->
<link type="text/css" rel="stylesheet" href="resources/css/bootstrap.css">
<link type="text/css" rel="stylesheet" href="resources/css/tema.css">
<link type="text/css" rel="stylesheet" href="resources/css/main.css">

<!-- Bibliotecas -->
<script type="text/javascript" src="resources/js/jquery-2.2.0.min.js"></script>
<script type="text/javascript" src="resources/js/angular.js"></script>
<script type="text/javascript" src="resources/js/bootstrap.js"></script>
<script type="text/javascript" src="resources/js/clipboard.js"></script>
<script type="text/javascript" src="resources/js/angular-ui-router.js"></script>
<script type="text/javascript" src="resources/js/angular-resource.js"></script>
<script type="text/javascript" src="resources/js/angular-mocks.js"></script>
<script type="text/javascript" src="resources/js/angular-sanitize.js"></script>

<!-- Aplicacao -->
<script type="text/javascript" src="app/app.js"></script>

<!-- Services -->
<script type="text/javascript" src="common/services/common.services.js"></script>
<script type="text/javascript" src="common/services/notaResource.js"></script>
<script type="text/javascript" src="common/services/notaService.js"></script>
<script type="text/javascript" src="common/services/enderecadorService.js"></script>
<script type="text/javascript" src="common/services/descricaoService.js"></script>
<script type="text/javascript" src="common/services/corService.js"></script>

<!-- Controllers -->
<script type="text/javascript" src="app/notas/notasCtrl.js"></script>
<script type="text/javascript" src="app/enderecador/enderecadorCtrl.js"></script>
<script type="text/javascript" src="app/enderecador/enderecadorConsultaCtrl.js"></script>
<script type="text/javascript" src="app/descricao/descricaoCtrl.js"></script>
<script type="text/javascript" src="app/descricao/descricaoMontarCtrl.js"></script>

</head>
<body ng-app="gestaoCherry">
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<a class="navbar-brand" ui-sref="home">Gestão Cherry</a>
			<ul class="nav navbar-nav">
				<li><a ui-sref="notas">Notas</a></li>
				
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" ari-haspopup="true" aria-expanded="false">
						Endereçador <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li><a ui-sref="enderecadorAdicionar"><span class="glyphicon glyphicon-plus"></span> Adicionar</a></li>
						<li><a ui-sref="enderecadorConsultar"><span class="glyphicon glyphicon-search"></span> Consultar</a></li>
					</ul>
				</li>
				
				<li class="dropdown">
					<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" ari-haspopup="true" aria-expanded="false">
						Descrição <span class="caret"></span>
					</a>
					<ul class="dropdown-menu">
						<li><a ui-sref="descricao">Cadastrar Template</a></li>
						<li><a ui-sref="descricaoMontar">Montar Descrição</a></li>
					</ul>
				</li>
				
			</ul>
		</div>
	</nav>
	<div class="container" ui-view></div>
</body>
</html>