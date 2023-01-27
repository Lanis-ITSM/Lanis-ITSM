<script>
	import { local } from '$data/l18n/local';
</script>

<svelte:head>
	<title>Tentang</title>
	<meta name="description" content="Tentang Lanis" />
</svelte:head>
<section class="breadcrumbs">
	<div class="container">
		<div class="d-flex justify-content-between align-items-center">
			<h2>{local.tentang}</h2>
			<ol>
				<li><a href="/">{local.tentang_menu1}</a></li>
				<li>{local.tentang_menu2}</li>
			</ol>
		</div>
	</div>
</section>
<section id="about" class="about">
	<div class="container">
		<div class="section-title" data-aos="zoom-out">
			<h2>{local.isi_tentang}</h2>
			<p>{local.tentang_headline}</p>
		</div>
		<div class="row content" data-aos="fade-up">
			<div class="col-lg-6">
				<h3>{local.tentang_1}</h3>
				<p> {local.tentang_2} </p>
				<h3>{local.tentang_3}</h3>
				<p>{local.tentang_4}</p>
				<p>"{local.tentang_5}"</p>
				<p>{local.tentang_6}</p>
				<ul>
					<li><i class="ri-check-double-line"></i> {local.tentang_7}</li>
				</ul>
			</div>
			<div class="col-lg-6 pt-lg-0 pt-4">
				<h3>{local.tentang_8}</h3>
				<p>{local.tentang_9}</p>
			</div>
		</div>
	</div>
</section>
