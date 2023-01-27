<script>
	import { local } from '$data/l18n/local';
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="section-title" data-aos="zoom-out">
			<h2>{local.isi_about}</h2>
			<p>{local.about_headline}</p>
		</div>

		<div class="row mt-5">
			<div class="col-lg-4" data-aos="fade-right">
				<div class="info">
					<div class="address">
						<a href="https://goo.gl/maps/r8bHLuNQhtM8hfNK9"
							><i class="icofont-google-map"></i></a
						>
						<h4>{local.contact_1}</h4>
						<p>{local.contact_5}</p>
					</div>

					<div class="email">
						<a href="https://mail.google.com/mail/u/0/#inbox"
							><i class="icofont-envelope"></i></a
						>
						<h4>{local.contact_2}</h4>
						<p>lanisteguh@gmail.com</p>
					</div>

					<div class="phone">
						<a href="tel:+6287865437170"><i class="icofont-phone"></i></a>
						<h4>{local.contact_3}</h4>
						<p>+6287 865437170</p>
					</div>
				</div>
			</div>

			<div class="col-lg-8 mt-lg-0 mt-5" data-aos="fade-left">
				<form action="forms/mail.php" method="post" class="php-email-form">
					<div class="form-row">
						<div class="col-md-6 form-group">
							<input
								type="text"
								name="name"
								class="form-control"
								id="name"
								placeholder="{local.contact_6}"
								data-rule="minlen:4"
								data-msg="Please enter at least 4 chars"
							/>
							<div class="validate"></div>
						</div>
						<div class="col-md-6 form-group">
							<input
								type="email"
								class="form-control"
								name="email"
								id="email"
								placeholder="{local.contact_7}"
								data-rule="email"
								data-msg="Please enter a valid email"
							/>
							<div class="validate"></div>
						</div>
					</div>
					<div class="form-group">
						<input
							type="text"
							class="form-control"
							name="subject"
							id="subject"
							placeholder="{local.contact_8}"
							data-rule="minlen:4"
							data-msg="Please enter at least 8 chars of subject"
						/>
						<div class="validate"></div>
					</div>
					<div class="form-group">
						<textarea
							class="form-control"
							name="message"
							rows="5"
							data-rule="required"
							data-msg="Please write something for us"
							placeholder="Message"></textarea>
						<div class="validate"></div>
					</div>
					<div class="mb-3">
						<div class="loading">Loading</div>
						<div class="error-message"></div>
						<div class="sent-message">Your message has been sent. Thank you!</div>
					</div>
					<div class="text-center"><button type="submit">{local.contact_4}</button></div>
				</form>
			</div>
		</div>
	</div>
</section>
