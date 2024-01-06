<script lang="ts">
	import '../../../app.css';
</script>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title> Chris Daly - Resume</title>
		<link
			href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap"
			rel="stylesheet"
		/>
		<link href="https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
		<style>
			body {
				font-family: 'Roboto Mono', monospace;
			}
		</style>
	</head>
	<body class="min-h-screen">
		<div class="mx-auto mt-6 max-w-screen-lg md:flex">
			<div class="relative p-2 md:w-1/3">
				<div class="md:fixed">
					<div class="md:block">
						<img
							class="mx-auto h-36 w-36 rounded-full"
							src="https://avatars.githubusercontent.com/u/87335859?v=4"
							alt="the site creator's github profile avatar"
						/>
						<div class="mb-8 mt-4 items-center justify-center text-center">
							<h1 class="text-2xl font-bold text-gray-800">Chris Daly, III</h1>
							<div class="text-gray-600 md:text-lg">Software Engineer</div>
							<div class="mt-1 text-gray-600 md:hidden">
								--<a href="mailto:chris@cd3.dev" class="text-blue-400">chris@cd3.dev</a>--
							</div>
						</div>
					</div>
					<div class="mx-4 my-4 hidden md:block">
						<div class="my-5 flex text-lg text-gray-600">
							<div class="mr-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path
										d="M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"
									/>
									<path d="M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z" />
								</svg>
							</div>
							chris@cd3.dev
						</div>
						<div class="my-5 flex text-lg text-gray-600">
							<div class="mr-2">
								<svg
									class="text-gray-600"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path
										d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"
									/>
									<path
										d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"
									/>
								</svg>
							</div>
							Philadelphia, PA
						</div>
						<a
							href="https://www.linkedin.com/in/christopherdaly3"
							target="_blank"
							class="my-5 flex text-lg text-blue-500"
						>
							<div class="mr-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path
										d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"
									/>
								</svg>
							</div>
							LinkedIn
						</a>
						<a
							href="https://www.github.com/chrisdaly3"
							target="_blank"
							class="my-5 flex text-lg text-blue-500"
						>
							<div class="mr-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							</div>
							Github
						</a>
						<a href="https://www.cd3.dev" target="_blank" class="my-5 flex text-lg text-blue-500">
							<div class="mr-2">
								<svg
									width="24"
									height="24"
									xmlns="http://www.w3.org/2000/svg"
									fill-rule="evenodd"
									clip-rule="evenodd"
									><path
										d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"
									/></svg
								>
							</div>
							My Website
						</a>
					</div>
				</div>
			</div>
			<div class="w-full p-2 md:w-2/3">
				<div class="mx-4 mb-8">
					<h1 class="mb-4 text-4xl font-bold text-slate-800">Summary</h1>
					<p class="text-lg">
						Software Engineer with ~3 years of hands-on experience designing, implementing, and
						managing DevOps pipelines, bootstrapping cloud-native microservices in Python & Go, and
						automating Cloud infrastructure through Terraform.
					</p>
				</div>
				<div class="mx-4">
					<h1 class="mb-6 text-4xl font-bold text-slate-800">Experience</h1>
					<ul>
						<li class="mb-4">
							<h2 class="text-2xl font-medium text-gray-800">DevOps Engineer</h2>
							<div class="mt-1">
								<div>
									<i class="bx bx-buildings" style="color: #666"></i>
									<small class="text-base text-gray-800"> URBN, Inc.</small>
								</div>
								<div>
									<i class="bx bx-calendar text-sm" style="color: #666"></i>
									<small class="text-sm text-gray-600">Jul 2021 - Present </small>
								</div>
							</div>
						</li>
						<li class="mb-4">
							<h2 class="text-2xl font-medium text-gray-800">Full Stack Developer</h2>
							<div class="mt-1">
								<div>
									<i class="bx bx-buildings" style="color: #666"></i>
									<small class="text-base text-gray-800">Freelance</small>
								</div>
								<div>
									<i class="bx bx-calendar text-sm" style="color: #666"></i>
									<small class="text-sm text-gray-600">Dec 2022 - Present</small>
								</div>
							</div>
						</li>
						<li class="mb-8">
							<h2 class="text-2xl font-medium text-gray-800">Technical Release Manager</h2>
							<div class="mt-1">
								<div>
									<i class="bx bx-buildings" style="color: #666"></i>
									<small class="text-base text-gray-800"> Corporation Service Company (CSC)</small>
								</div>
								<div>
									<i class="bx bx-calendar text-sm" style="color: #666"></i>
									<small class="text-sm text-gray-600">Feb 2018 - Jul 2021</small>
								</div>
							</div>
						</li>
						<h1 class="mb-4 text-4xl font-bold text-slate-800">Skills and Tools</h1>
						<ul>
							<li class="mb-6 flex flex-wrap">
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Go</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Python</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Typescript</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Javascript</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Terraform</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Bash</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Ruby</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Django</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>NodeJS</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Tornado</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Fiber(golang)</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Svelte</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>SvelteKit</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>TailwindCSS</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Google Cloud Platform</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Docker</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Kubernetes</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Nginx</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>Jenkins</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>SQL</span
								>
								<span
									class="my-1 mr-2 rounded-full border bg-gray-200 px-4 py-2 text-sm font-medium"
									>MongoDB</span
								>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
		<footer class="px-6 pb-4 flex flex-row gap-11 justify-center md:hidden">
			©CD3.dev
			<a href="https://www.linkedin.com/in/christopherdaly3" target="_blank" class="flex">
				<div class="mr-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"
						/>
					</svg>
				</div>
				LinkedIn
			</a>
			<a href="https://www.github.com/chrisdaly3" target="_blank" class="flex">
				<div class="mr-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</div>
				Github
			</a>
		</footer>
	</body>
</html>
