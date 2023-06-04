(() => {

  const paintingDesc = [
    {
      author: 'Великий художник',
      title: 'Бутылка с красной пробкой',
      date: '1945–1946',
      desc: 'На картине изображена красивая бутылка с красной пробкой. Цвет пробки символизирует цвет лица человека, который выпьет её содержимое',
    },
    {
      author: 'Каземир Малевич',
      title: 'Женщина с граблями',
      date: '1931–1932',
      desc: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930–1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    },
    {
      author: 'Бригадир сварщиков',
      title: 'Люди и медные трубы',
      date: '1965-1967',
      desc: 'Картина отображает будни обычных работяг, прокладывающих медный трубопровод. На переднем плане мы наблюдаем сварщика и ученика, которые готовятся соединять трубы малого диаметра.',
    },
    {
      author: 'Неудавшийся чертёжник',
      title: 'Слава геометрии',
      date: '1962-1965',
      desc: 'Картина была создана человеком, который не смог сдать экзамены в школу черчения, поэтому решил представить свой проект, как картину в современном стиле.',
    },
    {
      author: 'Анонимный химик',
      title: 'Мир под ЛСД',
      date: '1995-1997',
      desc: 'Картина отображает то, как видит мир человек, находящийся под действием ЛСД. Картина призвана продемонстрировать негативное влияние наркотиков на сознание и отображает то пагубное влияние, которое наркотики оказывают на органы чувств.',
    },
    {
      author: 'Неудавшийся чертёжник',
      title: 'Пересдача',
      date: '1968-1969',
      desc: 'Вторая попытка поступить...Опять провалилась, опять нужны деньги, опять продаём неудавшийся чертёж, как картину. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut aspernatur minima. Tenetur, recusandae. Voluptates, dicta. Laboriosam quasi recusandae sint, cumque blanditiis facere, est hic saepe odio cum repellat? A.',
    },

  ]

  // Скрол выпадающих списков хидера

  document.querySelectorAll('.drop-down__list').forEach( (e) => {
    new SimpleBar(e, {
      scrollbarMaxSize: '28',
    });
  })

  // Выпадающие списки хидера
  const headerButtons = document.querySelectorAll('.header-bottom__button');
  headerButtons.forEach((i) => {
    i.addEventListener('click', (e) => {
      const currentButton = e.currentTarget
      const currentDropDown = e.currentTarget.closest('.header-bottom__list-item').querySelector('.drop-down')

      if (currentButton.classList.contains('header-bottom__button--active')) {
        currentButton.classList.remove('header-bottom__button--active');
        document.querySelector('.header-bottom__drop-down-container--active').classList.remove('header-bottom__drop-down-container--active');
      } else {

        if (document.querySelector('.header-bottom__button--active')) {
          document.querySelector('.header-bottom__button--active').classList.remove('header-bottom__button--active');
          document.querySelector('.header-bottom__drop-down-container--active').classList.remove('header-bottom__drop-down-container--active');
        }
        currentButton.classList.add('header-bottom__button--active');
        currentDropDown.classList.add('header-bottom__drop-down-container--active');
      }
    })
  });

  // Свайпер хидера
  const headerSwiper = new Swiper('.header__swiper', {
    autoplay: {
      delay: 2000
    },
    loop: true,
  })

  //Селект галереи
  const gallerySelect = document.querySelector('.gallery__select');
  const choices = new Choices(gallerySelect, {
    searchEnabled: false,
    itemSelectText: '',
  });

  //Свайпер галереи
  const gallerySwiper = new Swiper('.gallery__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 4,
    loop: true,
    loopedSlidesLimit: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    a11y: {
      prevSlideMessage: 'Предыдущай слайд',
      nextSlideMessage: 'Следующий слайд',
      itemRoleDescriptionMessage: 'Картина',
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,

      },

      1632: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    }
  })

  //Модальное окно галереи
  document.querySelectorAll('.gallery__swiper .swiper-slide').forEach( (i) => {
    i.addEventListener('click', createModal);
  });

  // Аккордион каталога
  new Accordion('.catalog__accordion', {
    showMultiple: true,
  });

  // Кнопки каталога
  document.querySelectorAll('.catalog__panel-button').forEach( (button) =>{
    button.addEventListener('click', (e)=> {
      const data = e.currentTarget.dataset.aim;

      document.querySelectorAll('.catalog__desc').forEach( (i) => {
        i.classList.add('display-no');
      })

      document.querySelector(`[data-target="${data}"]`).classList.remove('display-no');

      if (document.documentElement.clientWidth <= 575) {
        document.querySelector('.catalog__block-left').scrollIntoView();
      }
    })
  })

  //Свайпер событий
  const eventsSwiper = new Swiper('.events__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    a11y: {
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Следующий слайд',
      slideLabelMessage: '',
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },

  })

  if (document.documentElement.clientWidth <= 575) {
    document.querySelector('.swiper-slide-1 .event__title').innerHTML = 'Книжная гравюра в восприятии'
  }

  //Свайпер проектов
  const projectsSwiper = new Swiper('.projects__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 48,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    a11y: {
      prevSlideMessage: 'Предыдущай слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Следующий слайд',
      slideLabelMessage: '',
    },

    breakpoints: {
      575: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      1632: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    }
  })

  // Яндекс карта
  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.758468, 37.601088],
          zoom: 14
      });

      var marker = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -20]
      });

      myMap.geoObjects.add(marker);
  }

  if (document.documentElement.clientWidth <= 576) {
    const contactsMap = document.querySelector('#map');
    contactsMap.style.height = '320px';
  }

  //Маскирование формы
  const telMask = new Inputmask('+7(999) 999-99-99');
  telMask.mask(document.querySelector('.contacts__input-tel'));

  //Валидация формы
  const contactsFormValidation = new JustValidate('.contacts__form', {
    submitHandler: function(form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', './mail.php', true);
      xhr.send(formData);
    }
  });

  contactsFormValidation.addField('.contacts__input-name', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    }
  ],
  {
    errorsContainer: '.contacts__span-alert-name',
    errorFieldCssClass: 'contacts__input--alert',
  }
  );

  contactsFormValidation.addField('.contacts__input-tel', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
    {
      validator: () => {
        return document.querySelector('.contacts__input-tel').inputmask.unmaskedvalue().length == 10;
      },
      errorMessage: 'Недопустимый формат'
    },
  ],
  {
    errorsContainer: '.contacts__span-alert-phone',
    errorFieldCssClass: 'contacts__input--alert',
  }
  );

  // Бургер меню

  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () =>{
    document.querySelector('.header-top__nav').classList.toggle('header-top__nav--active');
    document.querySelector('.burger').classList.toggle('burger--active');
    document.querySelector('.burger__span').classList.toggle('burger__span--active');
    if (document.documentElement.clientWidth <= 1399) {
      document.querySelector('body').classList.toggle('overflow-hidden');
    }
  })

  document.querySelectorAll('.header-top__list-link').forEach((link) =>{
    link.addEventListener('click', () => {
      document.querySelector('.header-top__nav').classList.toggle('header-top__nav--active');
      document.querySelector('.burger').classList.toggle('burger--active');
      document.querySelector('.burger__span').classList.toggle('burger__span--active');
      if (document.documentElement.clientWidth <= 1399) {
        document.querySelector('body').classList.toggle('overflow-hidden');
      }
    })
  })

  //Форма поиска header-top
  document.querySelector('.header-top__form').addEventListener('submit', (e) => {
    e.preventDefault();
  })

  document.querySelector('.header-top__button-searh').addEventListener('click', () => {
    document.querySelector('.header-top__form').classList.add('header-top__form--active');
    document.querySelector('.header-top__button-searh').classList.add('visible-hidden');
  })

  document.querySelector('.header-top__form-button-close').addEventListener('click', () => {
    document.querySelector('.header-top__form').classList.remove('header-top__form--active');
    document.querySelector('.header-top__button-searh').classList.remove('visible-hidden');
  })

  //Ссылка проектов
  if (document.documentElement.clientWidth <= 1023) {
    const projectLink = document.querySelector('.projects__link');
    projectLink.innerHTML = 'blanchard-art.ru';
    projectLink.href = 'blanchard-art.ru';
  }

  //Параграф проектов
  if (document.documentElement.clientWidth <= 575) {
    document.querySelector('.projects__paragraph').innerHTML = `
    Предварительные выводы: постоянное информационно — пропагандистское обеспечение нашей деятельности однозначно фиксирует необходимость своевременного выполнения сверхзадачи. А ещё независимые государства смешаны с не уникальными данными до степени совершённой неузнаваемости, из-за чего возрастает их статус бесполезности. Прежде всего, постоянное информационно — пропагандистское
    <span tabindex="0" class="projects__span">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="projects__svg">
        <path d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z" stroke="#9D5CD0" class="svg-back"/>
        <path d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z" fill="black" class="svg-desc"/>
      </svg>
    </span>
    обеспечение нашей деятельности однозначно фиксирует необходимость экономической целесообразности принимаемых решений. И нет сомнений, что действия представителей оппозиции могут быть рассмотрены
    <span tabindex="0" class="projects__span">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="projects__svg">
        <path d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z" stroke="#9D5CD0" class="svg-back"/>
        <path d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z" fill="black" class="svg-desc"/>
      </svg>
    </span>
    исключительно в разрезе маркетинговых и финансовых
    <span tabindex="0" class="projects__span">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="projects__svg">
        <path d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z" stroke="#9D5CD0" class="svg-back"/>
        <path d="M7.26154 6.4551H8.73846V13H7.26154V6.4551ZM8 4.90259C7.71282 4.90259 7.4718 4.81126 7.27692 4.62861C7.09231 4.44597 7 4.22273 7 3.9589C7 3.69508 7.09231 3.47184 7.27692 3.28919C7.4718 3.0964 7.71282 3 8 3C8.28718 3 8.52308 3.09132 8.70769 3.27397C8.90256 3.44647 9 3.66464 9 3.92846C9 4.20243 8.90256 4.43582 8.70769 4.62861C8.52308 4.81126 8.28718 4.90259 8 4.90259Z" fill="black" class="svg-desc"/>
      </svg>
    </span>
    предпосылок. Банальные, но неопровержимые выводы, а также представители современных социальных резервов призывают нас к новым свершениям, которые, в свою очередь, должны быть смешаны с не уникальными данными до степени совершённой неузнаваемости. Подробнее:
    <a href="blanchard-art.ru/projects/about" class="projects__link">blanchard-art.ru/projects/about</a>
    `
  }

  //Заголовок адреса контактов
  if (document.documentElement.clientWidth <= 1400) {
    const contactsTitle = document.querySelector('.contacts__address-title');
    contactsTitle.innerHTML = 'Щоурум № 4';
  }

  //Кнопка контактов
  if (document.documentElement.clientWidth <= 576) {
    const contactsButton = document.querySelector('.contacts__button');
    contactsButton.innerHTML = 'Заказать';
  }

  function createModal(slide) {
    const slideNumber = slide.currentTarget.dataset.slide;
    const descObject = paintingDesc[(slideNumber - 1)]

    const modal = document.createElement('div');
    const modalContent = document.createElement('div');

    modal.classList.add('modal', 'animate__animated', 'animate__fadeIn', 'animate__faster');
    modalContent.classList.add('modal-content', 'flex');

    modalContent.insertAdjacentHTML('beforeend', `

    <div class="modal-content__block-left gallery__slide-${slideNumber}">

    </div>

    <div class="modal-content__block-right">
      <h3 class="modal-content__title block-title">
        ${descObject.author}
      </h3>

      <p class="modal-content__picture-name section-paragraph">
        ${descObject.title}
      </p>

      <span class="modal-content__time">
        ${descObject.date}
      </span>

      <p class="modal-content__desc section-paragraph">
        ${descObject.desc}
      </p>
    </div>

    <button class="modal-content__button btn-rst">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666641 15.3043L15.3333 3.17761e-05L16 0.695679L1.33331 15.9999L0.666641 15.3043Z" fill="black"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666725 -2.96187e-06L15.3334 15.3042L14.6667 15.9999L5.76143e-05 0.695644L0.666725 -2.96187e-06Z" fill="black"/>
      </svg>
    </button>

    `)

    modalContent.querySelector('.modal-content__button').addEventListener('click', closeModal);

    modal.append(modalContent);
    document.querySelector('body').append(modal);
    document.querySelector('body').classList.add('overflow-hidden');


  }

  function closeModal() {
    const modal = document.querySelector('.modal');
    document.querySelector('body').classList.remove('overflow-hidden');
    modal.classList.add('animate__fadeOut');
    setTimeout(() => {
      modal.remove();
    }, 300);
  }

    // Тултипы
    tippy('.projects__span', {
      content: 'Нас окружают рыбы. Возможно, весь наш мир - это рыба',
      duration: [300, 300],
      appendTo: document.body,
    })


})();
