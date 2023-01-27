<script>
	import { local } from '$data/l18n/local';
</script>

<section id="features" class="features">
	<div class="container">
		<ul class="nav nav-tabs row d-flex">
			<li class="nav-item col-3" data-aos="zoom-in">
				<a class="nav-link active show" data-toggle="tab" href="#tab-1">
					<i class="ri-home-wifi-line"></i>
					<h4 class="d-none d-lg-block">{local.fitur_1}</h4>
				</a>
			</li>
			<li class="nav-item col-3" data-aos="zoom-in" data-aos-delay="100">
				<a class="nav-link" data-toggle="tab" href="#tab-2">
					<i class="ri-smartphone-line"></i>
					<h4 class="d-none d-lg-block">{local.fitur_2}</h4>
				</a>
			</li>
			<li class="nav-item col-3" data-aos="zoom-in" data-aos-delay="200">
				<a class="nav-link" data-toggle="tab" href="#tab-3">
					<i class="ri-camera-lens-line"></i>
					<h4 class="d-none d-lg-block">{local.fitur_3}</h4>
				</a>
			</li>
			<li class="nav-item col-3" data-aos="zoom-in" data-aos-delay="300">
				<a class="nav-link" data-toggle="tab" href="#tab-4">
					<i class="ri-body-scan-line"></i>
					<h4 class="d-none d-lg-block">{local.fitur_4}</h4>
				</a>
			</li>
		</ul>

		<div class="tab-content" data-aos="fade-up">
			<div class="tab-pane active show" id="tab-1">
				<div class="row">
					<div class="col-lg-6 order-lg-1 mt-lg-0 order-2 mt-3">
						<h3>{local.fitur_1_isi1}</h3>
						<p class="font-italic">
							{local.fitur_1_isi2}
						</p>
						<p>
							{local.fitur_1_isi3}
						</p>
						<ul>
							<li><i class="ri-check-double-line"></i> {local.fitur_1_isi4}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_1_isi5}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_1_isi6}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_1_isi7}</li>
						</ul>
					</div>
					<div class="col-lg-6 order-lg-2 order-1 text-center">
						<img src="images/lanis/features/features-1.png" alt="" class="img-fluid" />
					</div>
				</div>
			</div>
			<div class="tab-pane" id="tab-2">
				<div class="row">
					<div class="col-lg-6 order-lg-1 mt-lg-0 order-2 mt-3">
						<h3>Gayatri <strong>{local.fitur_2_isi1}</strong></h3>
						<p>
							{local.fitur_2_isi2}
						</p>
						<p>
							{local.fitur_2_isi3}
						</p>
						<ul>
							<li><i class="ri-check-double-line"></i> {local.fitur_2_isi4}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_2_isi5}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_2_isi6}</li>
						</ul>
						<p class="font-italic">
							{local.fitur_2_isi7}
						</p>
					</div>
					<div class="col-lg-6 order-lg-2 order-1 text-center">
						<img src="images/lanis/features/features-2.png" alt="" class="img-fluid" />
					</div>
				</div>
			</div>
			<div class="tab-pane" id="tab-3">
				<div class="row">
					<div class="col-lg-6 order-lg-1 mt-lg-0 order-2 mt-3">
						<h3>{local.fitur_3_isi1}</h3>
						<p>
							{local.fitur_3_isi2}
						</p>
						<ul>
							<li><i class="ri-check-double-line"></i> {local.fitur_3_isi3}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_3_isi4}</li>
							<li><i class="ri-check-double-line"></i> {local.fitur_3_isi4}</li>
						</ul>
					</div>
					<div class="col-lg-6 order-lg-2 order-1 text-center">
						<img src="images/lanis/features/features-3.png" alt="" class="img-fluid" />
					</div>
				</div>
			</div>
			<div class="tab-pane" id="tab-4">
				<div class="row">
					<div class="col-lg-6 order-lg-1 mt-lg-0 order-2 mt-3">
						<h3>{local.fitur_4_isi1}</h3>
						<p>
							{local.fitur_4_isi2}
						</p>
						<p>
							{local.fitur_4_isi3}
						</p>
						<ul>
							<li
								><i class="ri-check-double-line"></i>
								<strong>{local.fitur_4_option1}</strong>{local.fitur_4_isi4}</li
							>
							<li
								><i class="ri-check-double-line"></i>
								<strong>{local.fitur_4_option2}</strong>{local.fitur_4_isi5}</li
							>
							<li
								><i class="ri-check-double-line"></i>
								<strong>{local.fitur_4_option3}</strong>{local.fitur_4_isi6}</li
							>
							<li
								><i class="ri-check-double-line"></i>
								<strong>{local.fitur_4_option4}</strong>{local.fitur_4_isi7}</li
							>
						</ul>
					</div>
					<div class="col-lg-6 order-lg-2 order-1 text-center">
						<img src="images/lanis/features/features-4.png" alt="" class="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
