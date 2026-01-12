// Sample Product Data
// Define your products here

const productData = {
  bestSeller: [
    {
      id: 'iris-out',
      title: 'Iris Out',
      artist: 'Kenshi Yonezu',
      price: '$120',
      image: 'imgs/CD-IMG/IRISOUT.png',
      cdImage: 'imgs/02. Compact Disks/01 Compact Disk.png',
      audioSrc: 'audio/IRIS OUT (mp3cut.net).mp3'
    },
    {
      id: 'jane-doe',
      title: 'Jane Doe',
      artist: 'Kenshi Yonezu',
      price: '$120',
      image: 'imgs/CD-IMG/JANEDOE.png',
      cdImage: 'imgs/02. Compact Disks/08 Compact Disk.png',
      audioSrc: 'audio/JANE DOE (mp3cut.net).mp3'
    },
    {
      id: 'forget-it',
      title: 'Forget It',
      artist: 'Yorushika',
      price: '$120',
      image: 'imgs/CD-IMG/Forget It.png',
      cdImage: 'imgs/02. Compact Disks/02 Compact Disk.png',
      audioSrc: 'audio/Forget It (mp3cut.net).mp3'
    },
    {
      id: 'idol',
      title: 'Idol',
      artist: 'Yoasobi',
      price: '$120',
      image: 'imgs/CD-IMG/Idol.png',
      cdImage: 'imgs/02. Compact Disks/04 Compact Disk.png',
      audioSrc: 'audio/Idol _ アイドル (mp3cut.net).mp3'
    }
  ],
  jpop: [
    // Add J-Pop products here
    {
      id: 'iris-out',
      title: 'Iris Out',
      artist: 'Kenshi Yonezu',
      price: '$120',
      image: 'imgs/CD-IMG/IRISOUT.png',
      cdImage: 'imgs/02. Compact Disks/01 Compact Disk.png',
      audioSrc: 'audio/IRIS OUT (mp3cut.net).mp3'
    },
    {
      id: 'encore',
      title: 'Encore',
      artist: 'Yoasobi',
      price: '$120',
      image: 'imgs/CD-IMG/TheBook1.png',
      cdImage: 'imgs/02. Compact Disks/06 Compact Disk.png',
      audioSrc: 'audio/Encore _ アンコール (mp3cut.net).mp3'
    },
    {
      id: 'the-book-2',
      title: 'A Little More',
      artist: 'Yoasobi',
      price: '$120',
      image: 'imgs/CD-IMG/TheBook3.png',
      cdImage: 'imgs/02. Compact Disks/04 Compact Disk.png',
      audioSrc: 'audio/Mou Sukoshi Dake _ もう少しだけ (mp3cut.net).mp3'
    },
    {
      id: 'otonoke',
      title: 'Otonoke',
      artist: 'Creepy Nuts',
      price: '$120',
      image: 'imgs/CD-IMG/Otonoke.png',
      cdImage: 'imgs/02. Compact Disks/07 Compact Disk.png',
      audioSrc: 'audio/Otonoke (mp3cut.net).mp3'
    }
  ],
  popRock: [
    // Add Pop Rock products here
  ],
  alternativeRock: [
    // Add Alternative Rock products here
    {
      id: 'sparkle',
      title: 'Sparkle',
      artist: 'Radwimps',
      price: '$120',
      image: 'imgs/CD-IMG/Ur Name.png',
      cdImage: 'imgs/02. Compact Disks/08 Compact Disk.png',
      audioSrc: 'audio/Sparkle (Movie Version) (mp3cut.net).mp3'
    },
    {
      id: 'duvet',
      title: 'Duvet',
      artist: 'Boa',
      price: '$120',
      image: 'imgs/CD-IMG/Duvet.png',
      cdImage: 'imgs/02. Compact Disks/02 Compact Disk.png',
      audioSrc: 'audio/Duvet (Sped Up) (mp3cut.net).mp3'
    },
    {
      id: 'Silhouette',
      title: 'Silhouette',
      artist: 'KANA-BOON',
      price: '$120',
      image: 'imgs/CD-IMG/Silhouette.png',
      cdImage: 'imgs/02. Compact Disks/01 Compact Disk.png',
      audioSrc: 'audio/Silhouette (mp3cut.net).mp3'
    },
    {
      id: 'that-band',
      title: 'That Band',
      artist: 'Kessoku Band',
      price: '$120',
      image: 'imgs/CD-IMG/seisun-complex.png',
      cdImage: 'imgs/02. Compact Disks/03 Compact Disk.png',
      audioSrc: 'audio/kessoku_band_-_kessoku_band_-_If_I_could_be_a_constellation_(mp3 (mp3cut.net).mp3'
    }
  ],
  moeKuyn: [
    // Add Moe Moe Kyun Kyun <3 products here
    {
      id: 'kawaii-kawaii',
      title: 'Kawaii Kawai',
      artist: 'PiKi',
      price: '$120',
      image: 'imgs/CD-IMG/kawaiied2.png',
      cdImage: 'imgs/02. Compact Disks/02 Compact Disk.png',
      audioSrc: 'audio/Kawaii Kaiwai (mp3cut.net).mp3'
    },
    {
      id: 'renai-circulation',
      title: 'Renai Circulate',
      artist: '*Namirin',
      price: '$120',
      image: 'imgs/CD-IMG/renai-circulation.png',
      cdImage: 'imgs/02. Compact Disks/05 Compact Disk.png',
      audioSrc: 'audio/Renai Circulation恋愛サーキュレーション歌ってみたなみりん (mp3cut.net).mp3'
    },
    {
      id: 'koino-yukue',
      title: 'Koino Yukue',
      artist: 'Akari Akase',
      price: '$120',
      image: 'imgs/CD-IMG/koi-noyukue.png',
      cdImage: 'imgs/02. Compact Disks/08 Compact Disk.png',
      audioSrc: 'audio/Koi No Yukue - Akari Akase Full Lyrics KanRomEng My Dress-Up Darling ED (mp3cut.net).mp3'
    },
    {
      id: 'kawaikute-gomen',
      title: 'Kawaii Gomen',
      artist: 'Kohanaramu',
      price: '$120',
      image: 'imgs/CD-IMG/kutegomen.png',
      cdImage: 'imgs/02. Compact Disks/03 Compact Disk.png',
      audioSrc: 'audio/可愛くてごめん feat. ちゅーたんCV早見沙織HoneyWorks (mp3cut.net).mp3'
    }
  ],
  idolDance: [
    // Add Idol-Dance Pop products here
    {
      id: 'idol',
      title: 'Idol',
      artist: 'Yoasobi',
      price: '$120',
      image: 'imgs/CD-IMG/Idol.png',
      cdImage: 'imgs/02. Compact Disks/04 Compact Disk.png',
      audioSrc: 'audio/Idol _ アイドル (mp3cut.net).mp3'
    },
    {
      id: 'otonoke',
      title: 'Otonoke',
      artist: 'Creepy Nuts',
      price: '$120',
      image: 'imgs/CD-IMG/Otonoke.png',
      cdImage: 'imgs/02. Compact Disks/07 Compact Disk.png',
      audioSrc: 'audio/Otonoke (mp3cut.net).mp3'
    },
    {
      id: 'kawaii-kawaii',
      title: 'Kawaii Kawai',
      artist: 'PiKi',
      price: '$120',
      image: 'imgs/CD-IMG/kawaiied2.png',
      cdImage: 'imgs/02. Compact Disks/02 Compact Disk.png',
      audioSrc: 'audio/Kawaii Kaiwai (mp3cut.net).mp3'
    },
    {
      id: 'encore',
      title: 'Encore',
      artist: 'Yoasobi',
      price: '$120',
      image: 'imgs/CD-IMG/TheBook1.png',
      cdImage: 'imgs/02. Compact Disks/06 Compact Disk.png',
      audioSrc: 'audio/Encore _ アンコール (mp3cut.net).mp3'
    }
  ],
  metal: [
    // Add Metal products here
  ],
  edm: [
    // Add EDM products here
  ],

  mobileBestseller: [
    {
      id: 'kawaii-kawaii',
      title: 'Kawaii Kawai',
      artist: 'PiKi',
      price: '$120',
      image: 'imgs/CD-IMG/kawaiied2.png',
      cdImage: 'imgs/02. Compact Disks/02 Compact Disk.png',
      audioSrc: 'audio/Kawaii Kaiwai (mp3cut.net).mp3'
    },
    {
      id: 'renai-circulate',
      title: 'Renai Circula',
      artist: '*Namirin',
      price: '$120',
      image: 'imgs/CD-IMG/renai-circulation.png',
      cdImage: 'imgs/02. Compact Disks/05 Compact Disk.png',
      audioSrc: 'audio/Renai Circulation恋愛サーキュレーション歌ってみたなみりん (mp3cut.net).mp3'
    },
    {
      id: 'koino-yukue',
      title: 'Koino Yukue',
      artist: 'Akari Akase',
      price: '$120',
      image: 'imgs/CD-IMG/koi-noyukue.png',
      cdImage: 'imgs/02. Compact Disks/08 Compact Disk.png',
      audioSrc: 'audio/Koi No Yukue - Akari Akase Full Lyrics KanRomEng My Dress-Up Darling ED (mp3cut.net).mp3'
    },
    {
      id: 'kawaikute-gomen',
      title: 'Kawaii Gomen',
      artist: 'Kohanaramu',
      price: '$120',
      image: 'imgs/CD-IMG/kutegomen.png',
      cdImage: 'imgs/02. Compact Disks/03 Compact Disk.png',
      audioSrc: 'audio/可愛くてごめん feat. ちゅーたんCV早見沙織HoneyWorks (mp3cut.net).mp3'
    }
  ],
  linh: [
    {
      id: 'kawaii-kawaii',
      title: 'Kawaii Kawai',
      artist: 'PiKi',
      price: '$120',
      image: 'imgs/CD-IMG/kawaiied2.png',
      cdImage: 'imgs/02. Compact Disks/02 Compact Disk.png',
      audioSrc: 'audio/Kawaii Kaiwai (mp3cut.net).mp3'
    },
    {
      id: 'renai-circulate',
      title: 'Renai Circula',
      artist: '*Namirin',
      price: '$120',
      image: 'imgs/CD-IMG/renai-circulation.png',
      cdImage: 'imgs/02. Compact Disks/05 Compact Disk.png',
      audioSrc: 'audio/Renai Circulation恋愛サーキュレーション歌ってみたなみりん (mp3cut.net).mp3'
    },
    {
      id: 'koino-yukue',
      title: 'Koino Yukue',
      artist: 'Akari Akase',
      price: '$120',
      image: 'imgs/CD-IMG/koi-noyukue.png',
      cdImage: 'imgs/02. Compact Disks/08 Compact Disk.png',
      audioSrc: 'audio/Koi No Yukue - Akari Akase Full Lyrics KanRomEng My Dress-Up Darling ED (mp3cut.net).mp3'
    },
    {
      id: 'kawaikute-gomen',
      title: 'Kawaii Gomen',
      artist: 'Kohanaramu',
      price: '$120',
      image: 'imgs/CD-IMG/kutegomen.png',
      cdImage: 'imgs/02. Compact Disks/03 Compact Disk.png',
      audioSrc: 'audio/可愛くてごめん feat. ちゅーたんCV早見沙織HoneyWorks (mp3cut.net).mp3'
    },
    {
      id: 'Silhouette',
      title: 'Silhouette',
      artist: 'KANA-BOON',
      price: '$120',
      image: 'imgs/CD-IMG/Silhouette.png',
      cdImage: 'imgs/02. Compact Disks/01 Compact Disk.png',
      audioSrc: 'audio/Silhouette (mp3cut.net).mp3'
    },
    {
      id: 'that-band',
      title: 'That Band',
      artist: 'Kessoku Band',
      price: '$120',
      image: 'imgs/CD-IMG/seisun-complex.png',
      cdImage: 'imgs/02. Compact Disks/03 Compact Disk.png',
      audioSrc: 'audio/kessoku_band_-_kessoku_band_-_If_I_could_be_a_constellation_(mp3 (mp3cut.net).mp3'
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productData;
}

