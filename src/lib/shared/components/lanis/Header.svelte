<script>
	import { local } from '$data/l18n/local';
</script>

<header id="header" class="fixed-top d-flex align-items-center  header-transparent ">
	<div class="d-flex align-items-center container">
		<div class="logo mr-auto">
			<h1 class="text-light">
				<a href="/"><img src="logos/lanis.png" alt="lanis logo" /></a>
			</h1>
			<!-- Uncomment below if you prefer to use an image logo -->
			<!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
		</div>
		<nav class="nav-menu d-none d-lg-block">
			<ul>
				<li class="active"><a href="/">{local.menu_home}</a></li>
				<li><a href="/about">{local.menu_about}</a></li>
				<li><a href="/about">{local.menu_service}</a></li>
				<li><a href="/about">{local.menu_portfolio}</a></li>
				<li><a href="/about">{local.menu_team}</a></li>
				<!-- <li><a href="gayatri.php">Mobile Apps</a></li> -->
				<!--<li><a href="news"><?php echo $lang_menu_blog; ?></a></li>
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>-->
				<li><a href="/about">{local.menu_contact}</a></li>
			</ul>
		</nav><!-- .nav-menu -->
	</div>
</header>
