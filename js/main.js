((c, d, w) => {
	let $btnMenu = d.getElementById('btnMenu'),
		$btnTheme = d.getElementById('btnTheme'),
		$dataTheme = d.querySelectorAll('[data-theme]'),
		$btnFlecha = d.getElementById('btnFlecha'),
		$menuLinks = d.querySelectorAll('.menu-link'),
		$formContact = d.getElementById('formContact'),
		$modalConten = d.getElementById('modalContent'),
		$btnFilterTodos = d.getElementById('btnFilterTodos'),
		$btnFilterProyectos = d.getElementById('btnFilterProyectos'),
		$btnFilterCertificados = d.getElementById('btnFilterCertificados'),
		$imgContentGalery = d.querySelectorAll('.img-contenedor');
	// skills
	const $php = d.getElementById('php'),
		$js = d.getElementById('js'),
		$csharp = d.getElementById('csharp'),
		$java = d.getElementById('java'),
		$mysql = d.getElementById('mysql'),
		$html = d.getElementById('html'),
		$python = d.getElementById('python'),
		$css = d.getElementById('css'),
		$git = d.getElementById('git'),
		$wordpress = d.getElementById('wordpress'),
		$android = d.getElementById('android'),
		$seo = d.getElementById('seo'),
		$smm = d.getElementById('smm'),
		$firebase = d.getElementById('firebase');
	lStorage = localStorage;
	const $inputs = d.querySelectorAll('.form-input');
	// FIXME: counter resume
	const contadores = document.querySelectorAll('.contador');
	const contarEnTiempo = 8000;

	// TODO: btn menu
	const showMenu = () => {
		d.querySelector('.menu').classList.toggle('show');
		if ($btnMenu.children[0].classList.contains('fa-bars')) {
			$btnMenu.children[0].classList.remove('fa-bars');
			$btnMenu.children[0].classList.add('fa-times');
		} else {
			$btnMenu.children[0].classList.remove('fa-times');
			$btnMenu.children[0].classList.add('fa-bars');
		}
	};
	$btnMenu.addEventListener('click', () => showMenu());
	// FIXME: menu
	const changeMenuLinkActive = (e) => {
		$menuLinks.forEach((link) => {
			link.classList.remove('active');
		});
		e.target.classList.add('active');
		showMenu();
	};

	// TODO: btn theme
	const setThemeDark = () => {
		$dataTheme.forEach((elemento) => {
			elemento.classList.add('dark');
		});
	};
	const setThemeLigth = () => {
		$dataTheme.forEach((elemento) => {
			elemento.classList.remove('dark');
		});
	};
	const setThemePortfolio = () => {
		if (lStorage.getItem('theme') === null) {
			lStorage.setItem('theme', 'ligth');
		}
		let theme = lStorage.getItem('theme');
		if (theme === 'dark') {
			setThemeDark();
			setTimeout(() => {
				$btnTheme.children[0].classList.remove('fa-moon');
				$btnTheme.children[0].classList.add('fa-sun');
			}, 500);
		}
		if (theme === 'ligth') {
			setTimeout(() => {
				$btnTheme.children[0].classList.add('fa-moon');
				$btnTheme.children[0].classList.remove('fa-sun');
			}, 500);
		}
	};

	$btnTheme.addEventListener('click', (e) => {
		if ($btnTheme.children[0].classList.contains('fa-moon')) {
			$btnTheme.children[0].classList.remove('fa-moon');
			$btnTheme.children[0].classList.add('fa-sun');
			lStorage.setItem('theme', 'dark');
			setThemeDark();
		} else {
			$btnTheme.children[0].classList.add('fa-moon');
			$btnTheme.children[0].classList.remove('fa-sun');
			lStorage.setItem('theme', 'ligth');
			setThemeLigth();
		}
	});
	// FIXME: btn flecha arriba
	$btnFlecha.addEventListener('click', () => {
		$menuLinks.forEach((link) => {
			link.classList.remove('active');
		});
		w.scrollTo({
			behavior: 'smooth',
			top: 0,
		});
	});
	w.addEventListener('scroll', () => {
		let scrolTop = d.documentElement.scrollTop;
		if (scrolTop > 350) {
			$btnFlecha.classList.add('show');
		} else {
			$btnFlecha.classList.remove('show');
			const filterGalery = (e) => {
				let $btnfilter = e.target,
					palabra = $btnfilter.textContent;
			};
		}
	});
	// TODO: Scroll Spia
	const ScrollSpia = () => {
		const $secciones = d.querySelectorAll('[data-scroll-spia]');

		const callBackObserver = (entries) => {
			entries.forEach((entry) => {
				let id = entry.target.getAttribute('id');
				if (entry.isIntersecting) {
					if (id !== 'resumen') {
						d.querySelector(`a[data-active-menu][href="#${id}"]`).classList.add('active');
					}
					if (id === 'misskills') {
						addSkillsAnimate();
					} else {
						removeSkillsAnimate();
					}

					if (id === 'resumen') {
						contadores.forEach((contador) => {
							const actualizarContador = () => {
								const totalContar = +contador.getAttribute('data-total');
								const contando = +contador.innerText;
								const incremento = Math.ceil(totalContar / contarEnTiempo);
								if (contando < totalContar) {
									contador.innerText = contando + incremento;
									setTimeout(actualizarContador, 1);
								} else {
									contador.innerText = totalContar;
								}
							};
							actualizarContador();
						});
					} else {
						contadores.forEach((contador) => {
							contador.innerText = 0;
						});
					}
				} else {
					if (id !== 'resumen') {
						d.querySelector(`a[data-active-menu][href="#${id}"]`).classList.remove('active');
					}
				}
			});
		};

		const observer = new IntersectionObserver(callBackObserver, {
			// root
			// rootMargin
			threshold: [0.5, 0.95],
		});

		$secciones.forEach((el) => {
			observer.observe(el);
		});
	};
	// FIXME: Formulario Contacto

	d.addEventListener('keydown', (e) => {
		if (e.target.matches('#formContact [required]')) {
			let $campo = e.target,
				patron = $campo.pattern || $campo.dataset.pattern;
			if (patron && $campo.value !== '') {
				let expreReg = new RegExp(patron);
				if (!expreReg.exec($campo.value)) {
					d.getElementById(`errorIcono_${$campo.id}`).classList.add('error');
					d.getElementById(`errorIcono_${$campo.id}`).children[0].classList.remove('fa-check');
					d.getElementById(`errorIcono_${$campo.id}`).children[0].classList.add('fa-times');
					d.getElementById(`error_${$campo.id}`).textContent = $campo.title;
				} else {
					d.getElementById(`errorIcono_${$campo.id}`).classList.add('error');
					d.getElementById(`errorIcono_${$campo.id}`).children[0].classList.remove('fa-times');
					d.getElementById(`errorIcono_${$campo.id}`).children[0].classList.add('fa-check');
					d.getElementById(`error_${$campo.id}`).textContent = '';
				}
			} else {
				d.getElementById(`errorIcono_${$campo.id}`).classList.add('error');
				d.getElementById(`errorIcono_${$campo.id}`).children[0].classList.remove('fa-check');
				d.getElementById(`errorIcono_${$campo.id}`).children[0].classList.add('fa-times');
				d.getElementById(`error_${$campo.id}`).textContent = $campo.title;
			}
		}
	});
	const checkErrorInput = () => {
		$inputs.forEach((campo) => {
			let patron = campo.pattern || campo.dataset.pattern;
			let expreReg = new RegExp(patron);
			if (!expreReg.exec(campo.value)) {
				d.getElementById(`errorIcono_${campo.id}`).classList.add('error');
				d.getElementById(`errorIcono_${campo.id}`).children[0].classList.remove('fa-check');
				d.getElementById(`errorIcono_${campo.id}`).children[0].classList.add('fa-times');
				d.getElementById(`error_${campo.id}`).textContent = campo.title;
			}
		});
	};

	$formContact.addEventListener('submit', (e) => {
		e.preventDefault();
		let patronNombre = $formContact.nombre.pattern || $formContact.nombre.dataset.pattern,
			patronCorreo = $formContact.correo.pattern || $formContact.correo.dataset.pattern,
			patronMensaje = $formContact.mensaje.pattern || $formContact.mensaje.dataset.pattern,
			nombre = $formContact.nombre,
			correo = $formContact.correo,
			mensaje = $formContact.mensaje;

		let expreRegNombre = new RegExp(patronNombre),
			expreRegCorreo = new RegExp(patronCorreo),
			expreRegMensaje = new RegExp(patronMensaje);

		if (nombre.value === '' && correo.value === '' && mensaje === '') {
			checkErrorInput();
		} else if (!expreRegNombre.exec(nombre.value)) {
			checkErrorInput();
		} else {
			d.getElementById(`errorIcono_nombre`).classList.remove('error');
			d.getElementById(`errorIcono_correo`).classList.remove('error');
			d.getElementById(`errorIcono_mensaje`).classList.remove('error');

			const options = {
				method: 'POST',
				body: new FormData(e.target),
			};
			fetch('https://formsubmit.co/ajax/chaicopadillag@gmail.com', options)
				.then((respuesta) => (respuesta.ok ? respuesta.json() : Promise.reject(respuesta)))
				.then((json) => {
					d.querySelector('.content-alert').innerHTML = `<div class="alerta success">
<i class="cerrar-alerta fa fa-times"></i>
<div class="alerta-mensaje"><strong>OK!:</strong> ${nombre.value}, gracias por tu mensaje pronto le responderé.
</div>
</div>`;
					setTimeout(() => {
						d.querySelector('.content-alert').innerHTML = '';
					}, 10000);
					d.querySelector('.cerrar-alerta').addEventListener('click', function (e) {
						d.querySelector('.content-alert').innerHTML = '';
					});
					$formContact.reset();
				})
				.catch((error) => {
					setTimeout(() => {
						d.querySelector('.content-alert').innerHTML = '';
					}, 10000);
					d.querySelector('.cerrar-alerta').addEventListener('click', function (e) {
						d.querySelector('.content-alert').innerHTML = '';
					});
					c.error(error.status, error.statusText);
				})
				.finally(() => {
					setTimeout(() => {
						c.info('Mostrando estado de envió');
					}, 3000);
				});
		}
	});
	// TODO: Galeria
	const lightboxShow = () => {
		const $btnCerrarModal = d.querySelector('.cerrar-modal'),
			$modalDescripcion = d.getElementById('modalDescripcion'),
			$btnRightImg = d.getElementById('btnRightImg'),
			$btnLeftImg = d.getElementById('btnLeftImg'),
			$imgs = d.querySelectorAll('.img-poyecto'),
			$presentation = d.getElementById('presentation');
		let imgActive = 0;
		$imgs.forEach((img) => {
			img.addEventListener('click', (e) => {
				const $imgModal = d.createElement('img'),
					$imgOld = $presentation.children[0];
				$imgModal.classList.add('modal-img');
				$modalConten.classList.add('show');
				$imgModal.setAttribute('src', img.getAttribute('src'));
				$modalDescripcion.textContent = img.getAttribute('alt');
				imgActive = img.getAttribute('data-item-img');
				if (!$imgOld) {
					$presentation.appendChild($imgModal);
				} else {
					$presentation.replaceChild($imgModal, $imgOld);
				}
			});
		});
		$btnCerrarModal.addEventListener('click', (e) => {
			$modalConten.classList.remove('show');
		});
		$btnLeftImg.addEventListener('click', (e) => {
			imgActive--;
			if (imgActive < 0) {
				imgActive = $imgs.length - 1;
			}
			const $imgModal = d.createElement('img');
			$imgModal.classList.add('modal-img');
			$imgModal.setAttribute('src', $imgs[imgActive].getAttribute('src'));
			const $imgOld = $presentation.children[0];
			$presentation.replaceChild($imgModal, $imgOld);
			$modalDescripcion.textContent = $imgs[imgActive].getAttribute('alt');
		});
		$btnRightImg.addEventListener('click', (e) => {
			imgActive++;
			if (imgActive > $imgs.length - 1) {
				imgActive = 0;
			}
			const $imgModal = d.createElement('img');
			$imgModal.classList.add('modal-img');
			$imgModal.setAttribute('src', $imgs[imgActive].getAttribute('src'));
			const $imgOld = $presentation.children[0];
			$presentation.replaceChild($imgModal, $imgOld);
			$modalDescripcion.textContent = $imgs[imgActive].getAttribute('alt');
		});
	};
	$btnFilterTodos.addEventListener('click', (e) => {
		$btnFilterTodos.classList.add('active');
		$btnFilterProyectos.classList.remove('active');
		$btnFilterCertificados.classList.remove('active');
		e.preventDefault();
		$imgContentGalery.forEach((contentedorImg) => contentedorImg.classList.remove('filter-none'));
	});
	$btnFilterProyectos.addEventListener('click', (e) => {
		e.preventDefault();
		$btnFilterTodos.classList.remove('active');
		$btnFilterProyectos.classList.add('active');
		$btnFilterCertificados.classList.remove('active');
		$imgContentGalery.forEach((contentedorImg) => {
			if (
				contentedorImg.getAttribute('data-type').toLowerCase().includes($btnFilterProyectos.textContent.toLowerCase())
			) {
				contentedorImg.classList.remove('filter-none');
			} else {
				contentedorImg.classList.add('filter-none');
			}
		});
	});
	$btnFilterCertificados.addEventListener('click', (e) => {
		e.preventDefault();
		$btnFilterTodos.classList.remove('active');
		$btnFilterProyectos.classList.remove('active');
		$btnFilterCertificados.classList.add('active');
		$imgContentGalery.forEach((contentedorImg) => {
			if (
				contentedorImg
					.getAttribute('data-type')
					.toLowerCase()
					.includes($btnFilterCertificados.textContent.toLowerCase())
			) {
				contentedorImg.classList.remove('filter-none');
			} else {
				contentedorImg.classList.add('filter-none');
			}
		});
	});
	// FIXME: skillAnimate
	const addSkillsAnimate = () => {
		$php.classList.add('php');
		$js.classList.add('js');
		$csharp.classList.add('csharp');
		$java.classList.add('java');
		$mysql.classList.add('mysql');
		$html.classList.add('html');
		$python.classList.add('python');
		$css.classList.add('css');
		$git.classList.add('git');
		$wordpress.classList.add('wordpress');
		$android.classList.add('android');
		$seo.classList.add('seo');
		$smm.classList.add('smm');
		$firebase.classList.add('firebase');
	};
	const removeSkillsAnimate = () => {
		$php.classList.remove('php');
		$js.classList.remove('js');
		$csharp.classList.remove('csharp');
		$java.classList.remove('java');
		$mysql.classList.remove('mysql');
		$html.classList.remove('html');
		$python.classList.remove('python');
		$css.classList.remove('css');
		$git.classList.remove('git');
		$wordpress.classList.remove('wordpress');
		$android.classList.remove('android');
		$seo.classList.remove('seo');
		$smm.classList.remove('smm');
		$firebase.classList.remove('firebase');
	};

	// TODO: EL evento DOMContentLoaded
	d.addEventListener('DOMContentLoaded', () => {
		setThemePortfolio();
		$menuLinks.forEach((link) => {
			link.addEventListener('click', (link) => {
				changeMenuLinkActive(link);
			});
		});
		ScrollSpia();
		lightboxShow();
	});
	d.addEventListener('click', (e) => {
		if (e.target === $modalConten) {
			$modalConten.classList.remove('show');
		}
	});
})(console, document, window);
