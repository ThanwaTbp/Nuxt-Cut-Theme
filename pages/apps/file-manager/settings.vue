<script setup lang="ts">
useHead({
	title: 'Settings',
	meta: [
		{
			name: 'keywords',
			content: 'Content, Nuxt 3'
		},
		{
			name: 'Description',
			content: 'Nuxt 3,  THW'
		}
	]
})
</script>

<template>
	<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
		<!--begin::Container-->
		<div id="kt_content_container" class="container-xxl">
			<!--begin::Card-->
			<div class="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10"
				style="background-size: auto calc(100% + 10rem); background-position-x: 100%; background-image: url('/media/illustrations/sketchy-1/4.png')">
				<!--begin::Card header-->
				<div class="card-header pt-10">
					<div class="d-flex align-items-center">
						<!--begin::Icon-->
						<div class="symbol symbol-circle me-5">
							<div class="symbol-label bg-transparent text-primary border border-secondary border-dashed">
								<!--begin::Svg Icon | path: icons/duotune/abstract/abs020.svg-->
								<span class="svg-icon svg-icon-2x svg-icon-primary">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M17.302 11.35L12.002 20.55H21.202C21.802 20.55 22.202 19.85 21.902 19.35L17.302 11.35Z"
											fill="currentColor" />
										<path opacity="0.3"
											d="M12.002 20.55H2.802C2.202 20.55 1.80202 19.85 2.10202 19.35L6.70203 11.45L12.002 20.55ZM11.302 3.45L6.70203 11.35H17.302L12.702 3.45C12.402 2.85 11.602 2.85 11.302 3.45Z"
											fill="currentColor" />
									</svg>
								</span>
								<!--end::Svg Icon-->
							</div>
						</div>
						<!--end::Icon-->
						<!--begin::Title-->
						<div class="d-flex flex-column">
							<h2 class="mb-1">Settings</h2>
							<div class="text-muted fw-bold">
								<a href="#">Keenthemes</a>
								<span class="mx-3">|</span>
								<a href="#">File Manager</a>
								<span class="mx-3">|</span>2.6 GB
								<span class="mx-3">|</span>758 items
							</div>
						</div>
						<!--end::Title-->
					</div>
				</div>
				<!--end::Card header-->
				<!--begin::Card body-->
				<div class="card-body pb-0">
					<!--begin::Navs-->
					<div class="d-flex overflow-auto h-55px">
						<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-semibold flex-nowrap">
							<!--begin::Nav item-->
							<li class="nav-item">
								<NuxtLink class="nav-link text-active-primary me-6"
									to="/apps/file-manager/folders">Files</NuxtLink>
							</li>
							<!--end::Nav item-->
							<!--begin::Nav item-->
							<li class="nav-item">
								<NuxtLink class="nav-link text-active-primary me-6 active"
									to="/apps/file-manager/settings">Settings</NuxtLink>
							</li>
							<!--end::Nav item-->
						</ul>
					</div>
					<!--begin::Navs-->
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Card-->
			<!--begin::Card-->
			<div class="card card-flush">
				<!--begin::Card header-->
				<div class="card-header pt-8">
					<!--begin::Card title-->
					<div class="card-title">
						<h2>Preferences</h2>
					</div>
					<!--end::Card title-->
				</div>
				<!--end::Card header-->
				<!--begin::Card body-->
				<div class="card-body">
					<!--begin::Form-->
					<form class="form" id="kt_file_manager_settings">
						<!--begin::Input group-->
						<div class="fv-row row mb-15">
							<!--begin::Col-->
							<div class="col-md-3 d-flex align-items-center">
								<!--begin::Label-->
								<label class="fs-6 fw-semibold">Language</label>
								<!--end::Label-->
							</div>
							<!--end::Col-->
							<!--begin::Col-->
							<div class="col-md-9">
								<!--begin::Input-->
								<select name="language" aria-label="Select a Language" data-control="select2"
									data-placeholder="Select a Language..." class="form-select mb-2">
									<option></option>
									<option value="id">Bahasa Indonesia - Indonesian</option>
									<option value="msa">Bahasa Melayu - Malay</option>
									<option value="ca">Catal?? - Catalan</option>
									<option value="cs">??e??tina - Czech</option>
									<option value="da">Dansk - Danish</option>
									<option value="de">Deutsch - German</option>
									<option value="en">English</option>
									<option value="en-gb">English UK - British English</option>
									<option value="es">Espa??ol - Spanish</option>
									<option value="fil">Filipino</option>
									<option value="fr">Fran??ais - French</option>
									<option value="ga">Gaeilge - Irish (beta)</option>
									<option value="gl">Galego - Galician (beta)</option>
									<option value="hr">Hrvatski - Croatian</option>
									<option value="it">Italiano - Italian</option>
									<option value="hu">Magyar - Hungarian</option>
									<option value="nl">Nederlands - Dutch</option>
									<option value="no">Norsk - Norwegian</option>
									<option value="pl">Polski - Polish</option>
									<option value="pt">Portugu??s - Portuguese</option>
									<option value="ro">Rom??n?? - Romanian</option>
									<option value="sk">Sloven??ina - Slovak</option>
									<option value="fi">Suomi - Finnish</option>
									<option value="sv">Svenska - Swedish</option>
									<option value="vi">Ti???ng Vi???t - Vietnamese</option>
									<option value="tr">T??rk??e - Turkish</option>
									<option value="el">???????????????? - Greek</option>
									<option value="bg">?????????????????? ???????? - Bulgarian</option>
									<option value="ru">?????????????? - Russian</option>
									<option value="sr">???????????? - Serbian</option>
									<option value="uk">???????????????????? ???????? - Ukrainian</option>
									<option value="he">???????????????? - Hebrew</option>
									<option value="ur">???????? - Urdu (beta)</option>
									<option value="ar">?????????????? - Arabic</option>
									<option value="fa">?????????? - Persian</option>
									<option value="mr">??????????????? - Marathi</option>
									<option value="hi">?????????????????? - Hindi</option>
									<option value="bn">??????????????? - Bangla</option>
									<option value="gu">????????????????????? - Gujarati</option>
									<option value="ta">??????????????? - Tamil</option>
									<option value="kn">??????????????? - Kannada</option>
									<option value="th">????????????????????? - Thai</option>
									<option value="ko">????????? - Korean</option>
									<option value="ja">????????? - Japanese</option>
									<option value="zh-cn">???????????? - Simplified Chinese</option>
									<option value="zh-tw">???????????? - Traditional Chinese</option>
								</select>
								<!--end::Input-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Input group-->
						<!--begin::Input group-->
						<div class="fv-row row mb-15">
							<!--begin::Col-->
							<div class="col-md-3">
								<!--begin::Label-->
								<label class="fs-6 fw-semibold mt-2">Date Format</label>
								<div class="text-muted fs-7">For more info on moment() date formats, please
									<a href="https://momentjs.com/docs/#/displaying/format/" target="_blank">click here</a>.
								</div>
								<!--end::Label-->
							</div>
							<!--end::Col-->
							<!--begin::Col-->
							<div class="col-md-9">
								<!--begin::Input-->
								<select name="dateformat" aria-label="Select a date format" data-hide-search="true" data-control="select2"
									data-placeholder="Select a date format..." class="form-select mb-2">
									<option></option>
									<option value="1">10 Sep 2021, 10:15 AM</option>
									<option value="2">10/09/2021, 10:15 AM</option>
									<option value="3">09-10-2021</option>
									<option value="4">Sunday, September 10th 2010</option>
								</select>
								<!--end::Input-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Input group-->
						<!--begin::Input group-->
						<div class="fv-row row mb-15">
							<!--begin::Col-->
							<div class="col-md-3 d-flex align-items-center">
								<!--begin::Label-->
								<label class="fs-6 fw-semibold">Automatic time zone</label>
								<!--end::Label-->
							</div>
							<!--end::Col-->
							<!--begin::Col-->
							<div class="col-md-9">
								<!--begin::Switch-->
								<div class="form-check form-switch form-check-custom form-check-solid me-10">
									<input class="form-check-input h-30px w-50px" name="autotimezone" type="checkbox" value=""
										id="autotimezone" />
									<label class="form-check-label" for="autotimezone">GMT +10:00</label>
								</div>
								<!--begin::Switch-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Input group-->
						<!--begin::Input group-->
						<div class="fv-row row mb-15">
							<!--begin::Col-->
							<div class="col-md-3">
								<!--begin::Label-->
								<label class="fs-6 fw-semibold mt-2">Folder Compression</label>
								<div class="text-muted fs-7">Default file compression type when downloading folders</div>
								<!--end::Label-->
							</div>
							<!--end::Col-->
							<!--begin::Col-->
							<div class="col-md-9">
								<!--begin::Input-->
								<select name="compression" aria-label="Select a Compressions type" data-control="select2"
									data-hide-search="true" data-placeholder="Select a Compressions type..." class="form-select mb-2">
									<option></option>
									<option value="1">*.zip</option>
									<option value="2">*.7z</option>
									<option value="3">*.rar</option>
									<option value="4">*.tar.gz</option>
								</select>
								<!--end::Input-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Input group-->
						<!--begin::Input group-->
						<div class="fv-row row mb-15">
							<!--begin::Col-->
							<div class="col-md-3">
								<!--begin::Label-->
								<label class="fs-6 fw-semibold">Sharing Permissions</label>
								<!--end::Label-->
							</div>
							<!--end::Col-->
							<!--begin::Col-->
							<div class="col-md-9">
								<!--begin::Subtitle-->
								<label class="fs-6 fw-semibold mb-3">Organisation</label>
								<!--end::Subtitle-->
								<!--begin::Options-->
								<div class="d-flex">
									<!--begin::Switch-->
									<div class="form-check form-switch form-check-custom form-check-solid me-10">
										<input class="form-check-input h-30px w-50px" name="org_read" type="checkbox" value="" id="org_read"
											checked="checked" />
										<label class="form-check-label" for="org_read">Read</label>
									</div>
									<!--begin::Switch-->
									<!--begin::Switch-->
									<div class="form-check form-switch form-check-custom form-check-solid me-10">
										<input class="form-check-input h-30px w-50px" name="org_write" type="checkbox" value="" id="org_write"
											checked="checked" />
										<label class="form-check-label" for="org_write">Write</label>
									</div>
									<!--begin::Switch-->
								</div>
								<!--end::Options-->
								<!--begin::Separator-->
								<div class="separator mt-6 mb-5"></div>
								<!--end::Separator-->
								<!--begin::Subtitle-->
								<label class="fs-6 fw-semibold mb-3">Public</label>
								<!--end::Subtitle-->
								<!--begin::Options-->
								<div class="d-flex">
									<!--begin::Switch-->
									<div class="form-check form-switch form-check-custom form-check-solid me-10">
										<input class="form-check-input h-30px w-50px" name="public_read" type="checkbox" value=""
											id="public_read" checked="checked" />
										<label class="form-check-label" for="public_read">Read</label>
									</div>
									<!--begin::Switch-->
									<!--begin::Switch-->
									<div class="form-check form-switch form-check-custom form-check-solid me-10">
										<input class="form-check-input h-30px w-50px" name="public_write" type="checkbox" value=""
											id="public_write" />
										<label class="form-check-label" for="public_write">Write</label>
									</div>
									<!--begin::Switch-->
								</div>
								<!--end::Options-->
							</div>
							<!--end::Col-->
						</div>
						<!--end::Input group-->
						<!--begin::Action buttons-->
						<div class="row mt-12">
							<div class="col-md-9 offset-md-3">
								<!--begin::Cancel-->
								<button type="button" class="btn btn-light me-3">Cancel</button>
								<!--end::Cancel-->
								<!--begin::Button-->
								<button type="button" class="btn btn-primary" id="kt_file_manager_settings_submit">
									<span class="indicator-label">Save</span>
									<span class="indicator-progress">Please wait...
										<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
								<!--end::Button-->
							</div>
						</div>
						<!--begin::Action buttons-->
					</form>
					<!--end::Form-->
				</div>
				<!--end::Card body-->
			</div>
			<!--end::Card-->
		</div>
		<!--end::Container-->
	</div>
</template>


<style scoped>

</style>