// Central data source for all 8 Cultural Affairs Unit troupes.
// Each troupe page is rendered dynamically from this file via /troupes/:slug

const troupes = [
  {
    slug: 'kultura',
    name: 'Kultura Rizalia',
    craft: 'Dance',
    category: 'dance',
    logo: '/media/Kultura/logo.png',
    cardImage: '/media/kultura.jpg',
    tagline:
      "RTU's dance troupe, promoting Filipino culture through research-based traditional folk dance.",
    cardBlurb: 'Cultural dance preserving Filipino heritage.',
    reel: [
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/1512189396673364&show_text=false',
      },
      { type: 'image', src: '/media/Kultura/S1.jpg' },
      { type: 'image', src: '/media/Kultura/S2.jpg' },
    ],
    adviser: {
      img: '/media/Kultura/adviser.png',
      name: 'Ms. Angel S. Lapinig',
      role: 'Kultura Rizalia Adviser',
      quote:
        'Each performance today celebrates creativity, passion, and pride in who we are. Through music, dance, art, and theater, you remind us that culture is alive. Thank you for preserving the culture and tradition that we have — may you all continue to share your talents and shine on stage.',
    },
    logoMeaning: {
      title: 'Kultura Rizalia Logo',
      text:
        'The Baybayin script at the heart of the symbol reads "SAYAW" (dance), reflecting Kultura Rizalia\'s identity as a group known for research-based traditional folk dance performances. Below it, the troupe\'s name is encircled by a royal blue line matching the font color.',
    },
    artHistory: {
      title: 'Brief History of Dance',
      text:
        'Dance in the Philippines has deep cultural roots, from indigenous tribal dances to Spanish-influenced folk dances and modern contemporary styles. It has always been a form of storytelling, celebration, and cultural preservation. Over time, Filipino dance has evolved into a diverse art form reflecting the nation\'s rich heritage.',
    },
    troupeHistory: {
      title: 'Brief History of Kultura Rizalia',
      text:
        "RTU Kultura Rizalia is the university's dance troupe focused on promoting Filipino culture through movement. The group performs traditional, folk, and modern dances during school events and competitions. It aims to develop discipline, teamwork, and cultural appreciation among its members.",
    },
    galleryFolder: 'Kultura',
    connectBlurb: 'Dancers welcome — message the troupe or find us on Instagram.',
    fbUrl: 'https://www.facebook.com/officialRTUKulturaRizalia',
    socials: [
      { icon: 'ig', url: 'https://www.instagram.com/rtu_kulturarizalia', label: 'Instagram' },
      { icon: 'mail', url: 'mailto:rtukulturarizalia@gmail.com', label: 'rtukulturarizalia@gmail.com' },
      { icon: 'phone', url: 'tel:+639353148538', label: '0935 314 8538' },
    ],
  },
  {
    slug: 'himig',
    name: 'Himig Rizalia',
    craft: 'Choir',
    category: 'music',
    logo: '/media/Himig/logo.png',
    cardImage: '/media/himig.jpg',
    tagline: "The official choir of Rizal Technological University — harmony, discipline, and musical excellence.",
    cardBlurb: 'Choral ensemble with heavenly voices.',
    reel: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/6uVqd8vu0r0?controls=1' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/H3lOHSF9fks?controls=1' },
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/430372059459361&show_text=false',
      },
    ],
    adviser: {
      img: '/media/Himig/adviser.png',
      name: 'Mr. Reiner Aguilar',
      role: 'Himig Rizalia Director',
      quote:
        'Special performances that represent cultural diversity and various talents from the artists of Teatro Rizalia. Eye-catching arts and crafts can be seen, illustrating passion and talents through breathtaking performances. To those who will take part in the program, I wish you success. I hope we would continue to promote arts and culture, serving as an inspiration to the organization. Let us continue to create more performances that would capture the hearts of the people, thank you.',
    },
    logoMeaning: {
      title: 'Himig Rizalia Logo',
      text:
        "These elements anchor the logo in its institutional identity, signifying its affiliation with the university and representing Himig Rizalia as an integral part of the RTU community. The musical note represents creativity and the group's artistic focus — its vibrant red symbolizes passion, energy, and dedication to the art of music. The piano keys below signify harmony and foundational musical knowledge, essential to music education and performance. The overall circular form symbolizes inclusiveness and continuous growth, reflecting the group's values and its dedication to music, unity, and artistic excellence.",
    },
    artHistory: {
      title: 'Brief History of Choir',
      text:
        'Choirs have existed for centuries, originating from religious institutions where groups sang during worship services. Over time, choral music expanded into classical, folk, and contemporary genres. Choirs are now an important part of cultural and musical traditions worldwide.',
    },
    troupeHistory: {
      title: 'Brief History of Himig Rizalia',
      text:
        'RTU Himig Rizalia is the official choir of the university, composed of students passionate about vocal music. The group performs in various events, showcasing harmony and musical excellence. It also serves as a platform for students to develop their singing skills and express emotions through music.',
    },
    galleryFolder: 'Himig',
    connectBlurb: 'Curious about joining the choir? Reach out through any of our channels below.',
    fbUrl: 'https://www.facebook.com/himigrizaliaofficialpage',
    socials: [
      { icon: 'ig', url: 'https://www.instagram.com/rtuhimig_official', label: 'Instagram' },
      { icon: 'mail', url: 'mailto:rtuhimigrizalia@rtu.edu.ph', label: 'rtuhimigrizalia@rtu.edu.ph' },
    ],
  },
  {
    slug: 'biswal',
    name: 'Sining Biswal Rizalia',
    craft: 'Visual Arts',
    category: 'visual',
    logo: '/media/Biswal/logo.png',
    cardImage: '/media/biswal.jpg',
    tagline: 'Nurturing student creativity in painting, drawing, and design — one exhibit at a time.',
    cardBlurb: 'Visual arts creating masterpieces.',
    reel: [
      { type: 'image', src: '/media/Biswal/M1.jpg' },
      { type: 'image', src: '/media/Biswal/M2.jpg' },
      { type: 'image', src: '/media/Biswal/M3.jpg' },
      { type: 'image', src: '/media/Biswal/M4.jpg' },
    ],
    adviser: {
      img: '/media/Biswal/adviser.png',
      name: 'Mr. Kenneth Mamaril',
      role: 'Sining Biswal Rizalia Adviser',
      quote:
        'All forms of art such as visual, musical, literary, and theatrical connect us to our common humanity. It enables us to observe the world with compassion and creativity and to communicate ideas that words cannot. May we continue to respect our culture as Rizalianos by producing art that uplifts, heals, and empowers. Let your passion be your light.',
    },
    logoMeaning: {
      title: 'Sining Biswal Rizalia Logo',
      text:
        'The four hands in the logo represent the members of Sining Biswal Rizalia — probationary, regular, junior, and senior — working together to achieve the goal of spreading creativity and positivity through their work. The shadow shows the initials SB, for Sining Biswal.',
    },
    artHistory: {
      title: 'Brief History of Biswal',
      text:
        'Visual arts in the Philippines, or "Biswal," date back to ancient times, including cave drawings, indigenous crafts, and body art. Influenced by various cultures, Filipino visual arts evolved through painting, sculpture, and modern digital forms. Today it plays a vital role in expressing identity, creativity, and social perspectives.',
    },
    troupeHistory: {
      title: 'Brief History of Sining Biswal Rizalia',
      text:
        "RTU Sining Biswal Rizalia is dedicated to nurturing students' creativity in visual arts such as painting, drawing, and design. The organization provides a platform for aspiring artists to express their ideas and showcase their works through exhibits and university events. It fosters artistic growth while promoting Filipino culture and innovation.",
    },
    galleryFolder: 'Biswal',
    connectBlurb: 'Want to exhibit your work or join the collective? Get in touch below.',
    fbUrl: 'https://www.facebook.com/rtusiningbiswalboni',
    socials: [
      { icon: 'tiktok', url: 'https://www.tiktok.com/@rtu.sining.biswal', label: 'TikTok' },
      { icon: 'mail', url: 'mailto:biswalsining@gmail.com', label: 'biswalsining@gmail.com' },
    ],
  },
  {
    slug: 'dulaan',
    name: 'Dulaang Rizalia',
    craft: 'Theater',
    category: 'theater',
    logo: '/media/Dulaan/logo.png',
    cardImage: '/media/dulaan.jpg',
    tagline: "RTU's official theater group — acting, directing, and stage production in service of Filipino stories.",
    cardBlurb: 'Main theater troupe bringing stories to life on stage.',
    reel: [
      { type: 'image', src: '/media/Dulaan/S1.jpg' },
      { type: 'image', src: '/media/Dulaan/S2.jpg' },
      { type: 'image', src: '/media/Dulaan/S3.jpg' },
    ],
    adviser: {
      img: '/media/Dulaan/adviser.png',
      name: 'Mr. Mar Cordova',
      role: 'Dulaang Rizalia Adviser',
      quote:
        'We come together to witness a vibrant showcase of artistry, creativity, and traditions through our Cultural Recital. This event highlights the incredible talents of our different troupes, each bringing to life the colors, rhythms, music, dance and stories that reflect our diverse cultural heritage. Every performance is not just an act on stage — it is a tribute to the values, customs, and history that continue to inspire and unite us as one. To God be the Glory.',
    },
    logoMeaning: {
      title: 'Dulaang Rizalia Logo',
      text:
        'The abbreviation D.R. is rendered in Baybayin (Alibata) and set within a two-toned maroon-and-black rectangular plane that depicts the stage of the theater. Maroon symbolizes passion, sophistication, wisdom, and drive for success, evoking warmth and creativity. Black is often considered the ideal color for theater spaces — it absorbs light, enhances visual depth, and creates the dramatic contrast and "frame" effect that draws the eye to the stage.',
    },
    artHistory: {
      title: 'Brief History of Dulaan',
      text:
        '"Dulaan" refers to theater arts in the Philippines, rooted in pre-colonial storytelling traditions and influenced by Spanish and American theatrical forms. Early Filipino performances included rituals, folk plays, and religious dramas like the Senakulo. Over time, Philippine theater evolved into a platform for creative expression, social commentary, and cultural preservation.',
    },
    troupeHistory: {
      title: 'Brief History of Dulaang Rizalia',
      text:
        "RTU Dulaang Rizalia is the university's official theater group committed to developing students' talents in acting, directing, and stage production. The group stages plays that reflect Filipino culture, values, and contemporary issues. Through performances and workshops, Dulaang Rizalia promotes artistic expression and critical awareness within the RTU community.",
    },
    galleryFolder: 'Dulaan',
    connectBlurb: "Interested in auditioning or crewing a production? We'd love to hear from you.",
    fbUrl: 'https://www.facebook.com/DulaangRizaliaBoni',
    socials: [
      { icon: 'ig', url: 'https://www.instagram.com/rtudulaangrizalia', label: 'Instagram' },
      { icon: 'tiktok', url: 'https://www.tiktok.com/@rtudulaangrizalia', label: 'TikTok' },
      { icon: 'mail', url: 'mailto:dulaangrizalia@gmail.com', label: 'dulaangrizalia@gmail.com' },
      { icon: 'phone', url: 'tel:+639634684755', label: '0963 468 4755' },
    ],
  },
  {
    slug: 'panitikan',
    name: 'Panitikang Sining Rizalia',
    craft: 'Literary Arts',
    category: 'literary',
    logo: '/media/Panitikang/logo.png',
    cardImage: '/media/panitikan.jpg',
    tagline: 'Promoting literary arts among Rizalianos — poetry, essays, and stories that carry culture forward.',
    cardBlurb: 'Literary arts through poetry and prose.',
    reel: [
      { type: 'image', src: '/media/Panitikang/S1.jpg' },
      { type: 'image', src: '/media/Panitikang/S2.jpg' },
      { type: 'image', src: '/media/Panitikang/S3.jpg' },
    ],
    adviser: {
      img: '/media/Dulaan/adviser.png',
      name: 'Mr. Mar Cordova',
      role: 'Panitikang Sining Rizalia Adviser',
      quote:
        'We come together to witness a vibrant showcase of artistry, creativity, and traditions through our Cultural Recital. This event highlights the incredible talents of our different troupes, each bringing to life the colors, rhythms, music, dance and stories that reflect our diverse cultural heritage. Let each performance serve as a bridge that connects the past and the present. To God be the Glory.',
    },
    logoMeaning: {
      title: 'Panitikang Sining Rizalia Logo',
      text:
        'A circular insignia divided into two sides representing the collaboration between culture and literature. The left side resembles a gear in yellow and blue inscribed "Cultural Affairs Office," symbolizing organization and cultural growth. The right side, in black and yellow, encircles "Panitikang Sining Rizalia," emphasizing the group\'s dedication to arts and literature. At its core, an open book with a pen above it signals knowledge, creativity, and writing, with a stylized "RTU" beneath — linking academic identity with cultural artistry.',
    },
    artHistory: {
      title: 'Brief History of Panitikang Sining',
      text:
        'Panitikan, or Philippine literature, has roots in oral traditions such as epics, folktales, and proverbs. It evolved through written forms during the Spanish and American periods and continues to grow in modern times through diverse genres. Literature reflects the history, culture, and identity of the Filipino people.',
    },
    troupeHistory: {
      title: 'Brief History of Panitikang Sining Rizalia',
      text:
        'RTU Panitikang Sining Rizalia is an organization dedicated to promoting literary arts among students. It encourages writing in various forms such as poetry, essays, and stories. Through workshops, publications, and events, the group fosters creativity and appreciation for Filipino literature.',
    },
    galleryFolder: 'Panitikang',
    connectBlurb: 'Writers, poets, and spoken-word artists welcome — message us to get involved.',
    fbUrl: 'https://www.facebook.com/DulaangRizaliaBoni',
    socials: [],
  },
  {
    slug: 'rondalla',
    name: 'Tunog Rizalia Rondalla',
    craft: 'Rondalla',
    category: 'music',
    logo: '/media/Rondalla/logo.png',
    cardImage: '/media/rondalla.jpg',
    tagline: 'A Filipino string orchestra rooted in Spanish tradition — banduria, laud, octavina, guitar, and double bass.',
    cardBlurb: 'String ensemble with traditional instruments.',
    reel: [
      { type: 'youtube', src: 'https://www.youtube.com/embed/hUDJNORvRFo?controls=1' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/ax7D3blqp8M?controls=1' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/TBIIkzj_2mc?controls=1' },
    ],
    adviser: {
      img: '/media/Rondalla/adviser.png',
      name: 'Mr. Herminio B. Ramos Jr.',
      role: 'Tunog Rizalia Rondalla Adviser',
      quote:
        'We gather to celebrate the diverse culture that makes up our community and to witness the incredible talent and dedication of our performers. This event represents the culmination of countless hours of practice and dedication. We express our sincere gratitude to all the performers and artists for their commitment, as well as to our head, staff, and advisers for their support and encouragement.',
    },
    logoMeaning: {
      title: 'Tunog Rizalia Rondalla Logo',
      text:
        "A banduria — symbol of Filipino musical heritage — takes center stage, its intricate details echoing the country's rich cultural tapestry. The blue background, reminiscent of the Philippine sky, suggests boundless possibility and aspiration, while the vibrant gold of the rondalla, a hallmark of RTU's colors, signifies excellence and the university's enduring legacy — a visual commitment to preserving Filipino musical heritage while embracing a forward-looking spirit.",
    },
    artHistory: {
      title: 'Brief History of Rondalla',
      text:
        'Rondalla is derived from the Spanish word "ronda," meaning to roam, and traces back to the latter part of the 18th century. Rondalla instruments such as the piccolo, banduria, octavina, and laud carry 14 strings; the Philippine rondalla ensemble was initially composed of banduria, octavina, laud, classical guitar, and double bass.',
    },
    troupeHistory: {
      title: 'Brief History of Tunog Rizalia Rondalla',
      text:
        'Tunog Rizalia Rondalla is the official university rondalla of RTU, playing Philippine music rooted in Spanish tradition. Founded under conductor Mr. Lino V. Mangandi in August 2007, the ensemble is now led by adviser and conductor Mr. Herminio B. Ramos Jr. In 2011 the group represented the Philippines at the 3rd International Rondalla Festival in Tagum City, and in 2019 performed in PASINAYA at the Cultural Center of the Philippines alongside the Manila Symphony Orchestra. The troupe has since represented the National Capital Region in national competitions including the 2023 11th PASUC Solo Banduria competition and NAMCYA 2024 Senior Rondalla.',
    },
    galleryFolder: 'Rondalla',
    connectBlurb: 'String musicians welcome — reach the rondalla through any of the channels below.',
    fbUrl: 'https://www.facebook.com/RTUTunogRizaliaRondalla',
    socials: [
      { icon: 'yt', url: 'https://www.youtube.com/@tunogrizaliarondalla3306', label: 'YouTube' },
      { icon: 'mail', url: 'mailto:rtutunogrizaliarondalla@gmail.com', label: 'rtutunogrizaliarondalla@gmail.com' },
    ],
  },
  {
    slug: 'brass',
    name: 'Tunog Rizalia Brass Band',
    craft: 'Brass Band',
    category: 'music',
    logo: '/media/Brass/logo.png',
    cardImage: '/media/BRASS BAND.jpg',
    tagline: 'Since 2007 — marching band traditions carried forward with brass, percussion, and Rizaliano pride.',
    cardBlurb: 'Marching band with powerful sound.',
    reel: [
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/2326292974297897&show_text=false',
      },
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/590320921795017&show_text=false',
      },
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/476340179721934&show_text=false',
      },
    ],
    adviser: {
      img: '/media/Himig/adviser.png',
      name: 'Mr. Reiner Aguilar',
      role: 'Tunog Rizalia Brass Band Adviser',
      quote:
        'Special performances that represent cultural diversity and various talents from the artists of Teatro Rizalia. Eye-catching arts and crafts can be seen, illustrating passion and talents through breathtaking performances. To those who will take part in the program, I wish you success. Let us continue to create more performances that would capture the hearts of the people, thank you.',
    },
    logoMeaning: {
      title: 'Tunog Rizalia Brass Band Logo',
      text:
        'A circular emblem conveying tradition, pride, and musical excellence. At its core, a crest embellished with blue and gold motifs carries a trumpet and trombone superimposed over a shield — the band\'s identity and emphasis on brass instruments. Above it, four white feathers ascend beside the inscription "Since 2007," denoting the year of establishment, while a blue ribbon beneath the shield exhibits the initials "RTU." An outer ring reads "Rizal Technological University" and "Brass Band," framing the organization\'s academic and musical legacy in royal blue and gold.',
    },
    artHistory: {
      title: 'Brief History of Brass Band',
      text:
        'Brass bands originated in Europe during the early 19th century, particularly in Britain. They were formed as community ensembles composed mainly of brass instruments and percussion. These bands became popular in industrial towns, serving as entertainment and a source of pride for workers. Over time, brass bands spread worldwide and became an essential part of parades, ceremonies, and musical competitions.',
    },
    troupeHistory: {
      title: 'Brief History of Tunog Rizalia Brass Band',
      text:
        "Founded in 2007, Tunog Rizalia Brass Band carries RTU's presence into parades, ceremonies, and university events with brass and percussion. Under the mentorship of the Cultural Affairs Unit's advisers, the band has grown alongside its sister ensembles, giving Rizaliano musicians a marching-band tradition rooted in discipline, precision, and pride of place.",
      note:
        "The original site text for this section described Tunog Rizalia Rondalla instead of the Brass Band — likely a copy-paste carryover. This paragraph is a placeholder; swap in the band's real history when available.",
    },
    galleryFolder: 'Brass',
    connectBlurb: 'Brass, woodwind, or percussion player? The band is always listening for new talent.',
    fbUrl: 'https://www.facebook.com/RTUBrassband',
    socials: [],
  },
  {
    slug: 'band',
    name: 'Tunog Rizalista Band',
    craft: 'Contemporary Band',
    category: 'music',
    logo: '/media/Band/logo.png',
    cardImage: '/media/RIZALISTA BAND.jpg',
    tagline: "A contemporary music group giving RTU's modern musical talent a stage — pop, rock, and everything between.",
    cardBlurb: 'Contemporary music pushing boundaries.',
    reel: [
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/430372059459361&show_text=false',
      },
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/6130460160321971&show_text=false',
      },
      {
        type: 'facebook',
        src: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/346764055113204&show_text=false',
      },
    ],
    adviser: {
      img: '/media/Himig/adviser.png',
      name: 'Mr. Reiner Aguilar',
      role: 'Tunog Rizalista Band Adviser',
      quote:
        'Special performances that represent cultural diversity and various talents from the artists of Teatro Rizalia. Eye-catching arts and crafts can be seen, illustrating passion and talents through breathtaking performances. To those who will take part in the program, I wish you success. I hope we would continue to promote arts and culture, serving as an inspiration to the organization. Let us continue to create more performances that would capture the hearts of the people, thank you.',
    },
    logoMeaning: {
      title: 'Tunog Rizalista Band',
      text:
        "The design integrates patriotic motifs with musical imagery: a central face of José Rizal, encircled by brass instruments, the sun and stars of the Philippine flag, and prominent text that emphasizes the band's name. It embodies a vintage yet formidable look, ideal for a collective that venerates national heritage through music.",
    },
    artHistory: {
      title: 'Brief History of Band',
      text:
        'Contemporary bands emerged in the 20th century with the rise of modern music genres such as rock, pop, and jazz. These bands typically include electric instruments and focus on creative expression, songwriting, and performance. They continue to shape modern music culture worldwide.',
    },
    troupeHistory: {
      title: 'Brief History of Tunog Rizalista Band',
      text:
        'RTU Tunog Rizalista is a contemporary music group that highlights modern musical talent within the university. The band performs various genres, from pop to rock, during school activities and events. It encourages creativity, collaboration, and innovation among student musicians.',
    },
    galleryFolder: 'Band',
    connectBlurb: 'Have questions about auditions or bookings? Message the band directly on Facebook.',
    fbUrl: 'https://www.facebook.com/profile.php?id=61564285708726',
    socials: [],
  },
];

export const getTroupeBySlug = (slug) => troupes.find((t) => t.slug === slug);

export default troupes;
