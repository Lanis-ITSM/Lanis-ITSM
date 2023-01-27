<!-- svelte-ignore a11y-invalid-attribute -->
<script>
	import { local } from '$data/l18n/local';
</script>

<section id="services" class="services">
	<div class="container">
		<div class="section-title" data-aos="zoom-out">
			<h2>{local.isi_service}</h2>
			<p>{local.service_headline}</p>
		</div>

		<div class="row">
			<div class="col-lg-4 col-md-6">
				<div class="icon-box" data-aos="zoom-in-left">
					<div class="icon"><i class="las la-camera" style="color: #ff689b;"></i></div>
					<h4 class="title"><a href="">{local.service_judul1}</a></h4>
					<p class="description">{local.service_judul1_isi}</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mt-md-0 mt-5">
				<div class="icon-box" data-aos="zoom-in-left" data-aos-delay="100">
					<div class="icon"><i class="las la-home" style="color: #e9bf06;"></i></div>
					<h4 class="title"><a href="">{local.service_judul2}</a></h4>
					<p class="description">{local.service_judul2_isi}</p>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mt-lg-0 mt-5 ">
				<div class="icon-box" data-aos="zoom-in-left" data-aos-delay="200">
					<div class="icon"><i class="las la-video" style="color: #3fcdc7;"></i></div>
					<h4 class="title"><a href="">{local.service_judul3}</a></h4>
					<p class="description">{local.service_judul3_isi}</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 mt-5">
				<div class="icon-box" data-aos="zoom-in-left">
					<div class="icon"
						><i class="las la-network-wired" style="color:#41cf2e;"></i></div
					>
					<h4 class="title"><a href="">{local.service_judul4}</a></h4>
					<p class="description">{local.service_judul4_isi}</p>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mt-5">
				<div class="icon-box" data-aos="zoom-in-left" data-aos-delay="100">
					<div class="icon"
						><i class="las la-fingerprint" style="color: #d6ff22;"></i></div
					>
					<h4 class="title"><a href="">{local.service_judul5}</a></h4>
					<p class="description">{local.service_judul5_isi}</p>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 mt-5">
				<div class="icon-box" data-aos="zoom-in-left" data-aos-delay="200">
					<div class="icon"><i class="las la-database" style="color: #4680ff;"></i></div>
					<h4 class="title"><a href="">{local.service_judul6}</a></h4>
					<p class="description">{local.service_judul6_isi}</p>
				</div>
			</div>
		</div>

		<div class="col-lg-4 col-md-6 mt-5">
			<div class="icon-box" data-aos="zoom-in-left">
				<div class="icon"><i class="las la-mobile" style="color: #4680ff;"></i></div>
				<h4 class="title"><a href="">{local.service_judul7}</a></h4>
				<p class="description">{local.service_judul7_isi}</p>
			</div>
		</div>
	</div>
</section>
