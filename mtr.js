var idioma = sessionStorage.getItem("idioma");

if (idioma == "en") {
  bt_english();
}
  function bt_english() {
    sessionStorage.setItem("idioma", "en");
    
    $("#bt-idioma").html('<a onclick="bt_castellano()">ES</a>');
    $("#bt-idioma-movil").html('<a onclick="bt_castellano()">ES</a>');
   
    $("#nav-sobremi").text("About me");
    $("#nav-contacto").text("Contact");
    $("#nav-sobremi-movil").text("About me");
    $("#nav-contacto-movil").text("Contact");
    $("#hablamos-dale").html('<h1 class="titulo-seccion" style="color: rgb(0, 0, 0);"><span class="text-span-5">¿Hablamos?</span> Dale</h1>');
    $("#conecta-conmigo").text("Connect with me");
    
    $(".hablamos").hide();
    

    //HOME//
    $("#home-diseno").text("Graphic Design");
    $("#home-branding").text("Branding");
    $("#home-identidad").text("Visual Identity");
    $("#home-fotografia").text("Photography");

    $("#home-mas-proyectos").text("More projects");

    $("#home-servicios").text("Services");
    $("#home-servicio-branding").text("Branding");
    $("#home-servicio-branding-cont").text("Your brand is much more than a logo. We create a strategy to position it on the market and win its space in the consumer’s mind. We generate a visual system through which we carry out the applications that will come in contact with users at each point, both online and offline.");
    $("#home-servicio-identidad").text("Visual identity");
    $("#home-servicio-identidad-cont").text("If you already have a brand or a Project, we develop an identity to feed it with graphic resources that reflect the values and ideas we wish to express in a coherent way across all supports.");
    $("#home-servicio-direccion").text("Art direction");
    $("#home-servicio-direccion-cont").text("We define the aesthetics of your project or idea through visual codes based on a strategy that we will coordinate and oversee to ensure its correct communication.");
    $("#home-servicio-editorial").text("Editorial design");
    $("#home-servicio-editorial-cont").text("We create your cover, book, magazine, catalogue, flyer, or any format you may need in order to attract your consumers and get them to be a part of your project. ");
    $("#home-servicio-packaging").text("Packaging");
    $("#home-servicio-packaging-cont").text("Market image is what marks the difference when making a purchase decision. We create your packaging in order to reflect all the values related to your product in a visual and communicative way.");
    $("#home-servicio-foto").text("Photography/Video");
    $("#home-servicio-foto-cont").text("My vision is different. My range is wide: from urban photography to corporate videos. I also carry out portrait series or advertising campaigns.");
    $("#home-servicio-motion").text("Motion graphics");
    $("#home-servicio-motion-cont").text("We will put all visual elements in motion so they come to life through different techniques adjusted to the message that we must communicate.");
    $("#home-servicio-web").text("Interactive Web Design");
    $("#home-servicio-web-cont").text("Having a good Internet presence is crucial for your Business. We create the UI design while we facilitate the UX catered to the target we need to focus on.");


    //ABOUT ME//
    $("#about-me_title").text("About me");
    $("#about-me_text").html('Graphic designer and multidisciplinary art director specialized in Branding. <br><br>With a minimalistic style and an urban vision, my projects are characterized by a balance between order, functionality, and subtleness.<br><br>I have developed bran creation and visual identity projects, advertising campaigns, online and offline content creation, web, photography, video, and motion graphics.');
    $("#about-me_title2").text("Experience");
    $("#about-me_freelance").html('<span class="text-span-4">Freelance </span>(2013 – Today)<br>I have created several projects in different fields like: brand creation and management, visual identity, editorial design, photoshoots, video creation… Most of my work has focused on branding. I also carry out personal projects like posters or photography series.');
    $("#about-me_sirope").html('<span class="text-span-4">Sirope </span>(2021 – Today)<br>I am part of the design team where I create and develop projects for clients like Orbea, Euskal Trenbide Sarea, Eroski, Gobierno Vasco…');
    $("#about-me_biobizz").html('<span class="text-span-4">Biobizz World Wide Organics </span>(2018 – 2021)<br> was part of the Marketing department, where we carried out a worldwide rebranding (more than 65 countries) covering all online and offline needs.');
    $("#about-me_crc").html('<span class="text-span-4">C.R.C Iberica </span>(2016 – 2018)<br>I directed and made decisions in the design department, carrying out all branding, communication, social media and product packaging of the different secondary brands.');

    //CONTACT//
    $("#hablamos_title").text("Shall we speak");
    $("#hablamos_text").text("Tell me about your idea, project, or just say hi!");
    $("#hablamos_form").html('<input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Name" id="nombre"><input type="email" class="text-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="E-mail" id="mail" required=""><textarea id="mensaje" name="Mensaje-2" maxlength="5000" data-name="Mensaje 2" placeholder="Message" class="textarea textarea-2 text-field w-input"></textarea><label class="w-checkbox checkbox-field"><div class="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div><input type="checkbox" name="Aceptacion" id="Aceptacion" data-name="Aceptacion" required="" style="opacity:0;position:absolute;z-index:-1"><span class="checkbox-label w-form-label" for="Aceptacion">I accept the <a href="#" class="link-2">privacy policy</a></span></label><input type="submit" data-wait="Please wait..." value="Send" class="formulario-btn w-button">');

    
  
    //PROYECTS//
    $("#portfolio_title").text("The work speaks for itself, so I invite you to check out this selection of projects where I walk you through different concepts, applications, and commercial sectors. From music bands to a yoga shop, and even trendy jewelry. ");

    $(".musica").text("— Music");
    $("#pilates").text("— Pilates instructor");
    $("#yoga").text("- Yoga School an Shop");
    $("#joyeria").text("— Trend Jewelry");
    $("#conciertos").text("— Concert hall");
    $("#gastroturismo").text("— Gastrotourism");
    $("#reformas").text("— Reforms");
    $("#formacion").text("— Online training");
    $("#buceo").text("— Diving Instructors");
    $("#geneticas").text("— Genetics");
    $("#autoproyecto").text("— Various/Autoproject");
  

    $("#pr-titulo-cliente").text("Client");
    $("#pr-titulo-servicios").text("Services");


    //ARIANE//
    $("#pr-cont-servicios-ariane").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-ariane").text("Pilates");
    $("#pr-cont-descripcion-ariane").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Ariane Lanz is a Pilates instructor resident in Bilbao (Bizkaia).<br><br>She has a strong and deep personality, a lot of passion and dedication for her job. She needed a personal brand that expressed her values. This is the reason why we developed her identity (posters, cards, flyers, corporate clothing, work items ...) and we made a photo session to be able to use in the promotion of her workshops, events, etc.<br></p>');

    //BASS LEE//
    $("#pr-cont-servicios-bass-lee").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-bass-lee").text("Music");
    $("#pr-cont-descripcion-bass-lee").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Javier Arkotxa aka Bass Lee is a musical producer of Reggae, Dub, and Digital from Bilbao (Basque Country). A member of Message, an instrumental Reggae & Dub band, where he participates playing the melodica and the keyboard. <br></p>');

    //JUAN CANO//
    $("#pr-cont-servicios-juan-cano").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-juan-cano").text("Tattoo");
    $("#pr-cont-descripcion-juan-cano").html('<p id="pr-cont-descripcion-ariane" class="parrafo">He is a tattoo artist with many years of experience born in 1992 in Logroño. After a few years training his style and his graphic design studios, he moved to Houston (Texas, USA) where he took a professional leap by working in a studio with Valentín Colunga.<br><br>Later he returns to Spain, but this time to Madrid, where he can currently be found working.<br><br>I rebranded his brand, providing the identity that characterizes him, we redefined his applications, and we carried out a photoshoot in the studio.<br></p>');

    //TIME TO ROOTS//
    $("#pr-cont-servicios-time-to-roots").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-time-to-roots").text("Music");
    $("#pr-cont-descripcion-time-to-roots").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Time To Roots is a project directed by Jon Cagiao, which started more than 10 years ago in Ondarroa (Bizkaia) as a show dedicated to reggae music every Friday afternoon.<br><br>Now he has decided to launch his own record label, so I helped him update his brand, establishing coherence between his two projects. In this way we achieve an improvement in brand positioning and recognition. <br></p>');

    //TRILOBEAT//
    $("#pr-cont-servicios-trilobeat").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-trilobeat").text("Music");
    $("#pr-cont-descripcion-trilobeat").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Trilobeat is an electronic music DJ specialized in techno. Inspired by the old school, the sounds of Berlin and the new generation of experimental sounds. <br><br>From a great study of club culture, in his live sessions he tries to transport to a meditation state through the power of bass and sounds with frequencies that make you feel and connect in a special way.<br><br> We have worked on his logo, identity and merchandising. <br></p>');


    //GOIKO GELA//
    $("#pr-cont-servicios-goiko-gela").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-goiko-gela").text("Music");
    $("#pr-cont-descripcion-goiko-gela").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Goiko Gela is a southern gospel musical project composed of 4 voices and a pianist, which is what we wanted to reflect in their identity.<br></p>');

    //CIENCIA ESCRITA//
    $("#pr-cont-servicios-ciencia-escrita").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-ciencia-escrita").text("Music");
    $("#pr-cont-descripcion-ciencia-escrita").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Crew formed by Carrión, Ximo, and Pitu. Their music goes from old school hip hop productions to more contemporary sounds. <br><br>After a few years they are back in regular activity launching new singles and videoclips.We worked on their new brand and merchandising for this new stage.<br></p>');

    //DRUM GORRI//
    $("#pr-cont-servicios-drum-gorri").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-drum-gorri").text("Concert hall");
    $("#pr-cont-descripcion-drum-gorri").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Concert hall in Llodio (Álava, Basque Country) focused on underground genres. <br><br>They needed to update their identity, so we worked on their rebranding and some merchandising applications. <br></p>');

    //KRAKEN DIVERS//
    $("#pr-cont-servicios-kraken-divers").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-kraken-divers").text("Diving");
    $("#pr-cont-descripcion-kraken-divers").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Kraken Divers is a new project in Miranda de Ebro. If you want to try a new and unforgettable experience, go with them to do baptisms, courses and PADI diving trips, in collaboration with the Pedreña Diving Center, Santander. Connect with the most unknown part of the planet, you will see all the possibilities it can offer you.<br></p>');


    //MASAI KORA//
    $("#pr-cont-servicios-masai-kora").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-masai-kora").text("Trendy jewelry");
    $("#pr-cont-descripcion-masai-kora").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Masai Kora is a company dedicated to trendy jewelry, with high quality silver and elegant designs. <br><br>They needed to turn their brand and get it focused on the market niche they are in and we got to work on rebranding and packaging applications, business cards, etc.<br></p>');

       //REFORMAS JAM//
    $("#pr-cont-servicios-reformas-jam").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-reformas-jam").text("Edification");
    $("#pr-cont-descripcion-reformas-jam").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Company located in Vitoria-Gasteiz (Basque Country). Their main activity is the reforms in general as conditioning of portals, bathrooms, stairs, etc. We create their branding from scratch; as you can see in the stationery items, work clothes or the van. They use to move, the brand is homogenous and coherent.<br></p>'); 

    //INDICA//
    $("#pr-cont-servicios-indica").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-indica").text("Music");
    $("#pr-cont-descripcion-indica").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Indica is the brand of King Jahvy, renowned Andalusian producer of Reggae music. With a long career, he became known with the compilation "Reggae is Life" with artists such as Little Pepe, Shabu One Shant, Ijah... <br><br> After several years, now he is not only a producer, but he is also involved in a recording, mixing and mastering studio and he continues to make his own productions established in Granada (Andalusia, Spain).<br><br> Indica is also the digital label with which all this work is distributed. Also, King Jahvy does live shows, selecting vinyls from all times and of course, including his own productions.<br></p>');      

    //CRITICAL SOUND SYSTEM//
    $("#pr-cont-servicios-critical-sound").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-critical-sound").text("Music");
    $("#pr-cont-descripcion-critical-sound").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Critical Sound was born in Miranda de Ebro in 2006 by the hand of Edgar Selektah and Juza. Their intention has always been to extend Reggae music and culture in the most appropriate way with the maximum respect.<br><br> For many years selecting their music throughout Spain, it was time make that music play in the most appropriate way that is,in this case, through a custom made sound system, and so began the last stage in which they are right now, and in which they continue to spread the word.<br><br> I did the rebranding that they needed, and we applied it to various supports such as merchandising, signage, etc. accompanied by a photoshoot.<br></p>');  


    //FREEZE//
    $("#pr-cont-servicios-freeze").html('<p class="datos-cliente-bold">Editorial <br>Photography<br>Graphic Design</p>');
    $("#pr-cont-sector-freeze").text("Editorial");
    $("#pr-cont-descripcion-freeze").html('<p id="pr-cont-descripcion-ariane" class="parrafo">This is a personal project where I combine my trajectory in photography with my passion for editorial design, and more concretely books. <br><br> The concept comes from freezing time, capturing the essence of people through photography.<br><br> In this book you can find my family, friends, and artists with whom I had the pleasure to share moments of my life. <br></p>'); 

    //TURISNOMIC//
    $("#pr-cont-servicios-turisnomic").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-turisnomic").text("Gastro tourism");
    $("#pr-cont-descripcion-turisnomic").html('<p id="pr-cont-descripcion-ariane" class="parrafo">) Turisnomic is a tourism consultancy specialized in gastronomic leisure.<br><br> Its main mission is to create gastronomic tourism projects for tourism brands and companies, as well as to help digitize the primary sector to adapt to the new market.<br></p>');  

    //POSTERS//
    $("#pr-cont-client-posters").text("Various/Autoproject");
    $("#pr-cont-servicios-posters").html('<p class="datos-cliente-bold">Graphic Design</p>');
    $("#pr-cont-sector-posters").text("Various");
    $("#pr-cont-descripcion-posters").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Selection of posters where you can find posters for events, expositions, or self-driven projects.<br></p>');      

    //YOGAES//
    $("#pr-cont-servicios-yogaes").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-yogaes").text("Yoga");
    $("#pr-cont-descripcion-yogaes").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Yogaes is recognized as one of the main references in Yoga and meditation accessories as well as a Yoga center since 2006.<br><br> In their facilities, they have a modern space of 350 m2. With two rooms dedicated to learning, teaching and practicing Yoga, where other activities related to personal development and comprehensive well-being are also taught.<br><br> They needed a rebranding, so we started to research and develop this next step without leaving any of their main values.The result is what they expected to continue making a difference.<br></p>');  

    //RIVERSIDE MUZIK//
    $("#pr-cont-servicios-riverside").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-riverside").text("Music");
    $("#pr-cont-descripcion-riverside").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Riverside Muzik is the new label created by Sergiote in Barcelona. With a great career in Reggae, Sergiote has participated in the scene as a singer and as a producer/riddim maker.<br><br> For this new project, he focuses on creating riddims and collaborating with different singers.<br></p>');      

    //IMANOL TERAN//
    $("#pr-cont-servicios-imanol-teran").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-imanol-teran").text("Web development and online training");
    $("#pr-cont-descripcion-imanol-teran").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Branding for Imanol Terán, who is a web developer, dedicated to the creation of customized websites, apps, consulting and training.<br><br> I made his new brand, starting from the naming and moving to its applications such as business cards, training presentations, quote/invoice design, and website design that he has developed himself.<br><br> A homogeneous work, from the digital to the physical environment. I also carried out a photoshoot and a promotional video. You can find all his information at www.imanolteran.com <br></p>');  

    //JUNGLE FARM//
    $("#pr-cont-servicios-jungle-farm").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-jungle-farm").text("Farming");
    $("#pr-cont-descripcion-jungle-farm").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Jungle Farm Seeds & Genetics form a team of growers, breeders and other cannabis specialists.<br><br> They work in different countries looking for special, high-quality genetics. We created their brand from scratch, and produced various merchandising elements.<br></p>');  

    //LOGOFOLIO//
    $("#pr-cont-servicios-logofolio").html('<p class="datos-cliente-bold">Branding <br>Identity<br>Graphic Design</p>');
    $("#pr-cont-sector-logofolio").text("VA");
    $("#pr-cont-descripcion-logofolio").html('<p id="pr-cont-descripcion-ariane" class="parrafo">Selection of brands created throughout my career.<br></p>'); 
  }
  
  function bt_castellano() {
    location.reload();
  	sessionStorage.setItem("idioma", "es");
  }
