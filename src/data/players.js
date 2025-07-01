const players = [
    { name: "Virat Kohli", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750734531/virat_pic_yx4cnq.png", 
    role: "Batsman", batting: 91, bowling: 9, average: 57, stars: 5, objectPosition: "100% 20%", scale: 1 },

    { name: "MS Dhoni", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750751658/dhoni_pic_x6gvfi.jpg", 
    role: "Wk Batsman", batting: 88, bowling: 12, average: 50, stars: 5, objectPosition: "100% 20%",scale: 1},

    { name: "Hardik Pandya", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750751793/Hardik_Pandya_pic_ygxaua.jpg", 
    role: "All-Rounder", batting: 75, bowling: 60, average: 40, stars: 4, objectPosition: "100%_20%",scale: 1},

    { name: "Rohit Sharma", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750898997/RohitSharma2_ztunrw.webp", 
    role: "Batsman", batting: 89, bowling: 10, average: 48, stars: 5, objectPosition: "80% 20%",scale: 1},

    { name: "Ravindra Jadeja", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750898997/jadeja_pic_cz4rpg.gif", 
    role: "All-Rounder", batting: 70, bowling: 80, average: 38, stars: 4, objectPosition: "51% 0%",scale: 1.2},

    { name: "Jasprit Bumrah", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750752248/jashprit_bumrah_pic_fqj0la.jpg", 
    role: "Bowler", batting: 15, bowling: 95, average: 20, stars: 5, objectPosition: "100% 20%",scale: 1},

    { name: "Shubman Gill", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896018/subman_gill_pic_ycwrz6.jpg", 
    role: "Batsman", batting: 84, bowling: 10, average: 52, stars: 4, objectPosition: "75% 20%",scale: 1},

    { name: "Surya K. Yadav", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896106/suryakumar_yadav_pic_mfv1jz.jpg", 
    role: "Batsman", batting: 82, bowling: 5, average: 45, stars: 4, objectPosition: "40% 20%",scale: 1},

    { name: "R Ashwin", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750898996/R_Ashwin_pic_igsvhw.webp", 
    role: "Bowler", batting: 35, bowling: 92, average: 30, stars: 4, objectPosition: "40% 20%",scale: 1},

    { name: "KL Rahul", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896304/KL_Rahul_pic_tqas7j.jpg", 
    role: "WK Batsman", batting: 80, bowling: 10, average: 47, stars: 4, objectPosition: "60% 20%",scale: 1},

    { name: "Mohammed Shami", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896387/Mohammed_Shami_pic_ojtc9x.jpg", 
    role: "Bowler", batting: 18, bowling: 91, average: 22, stars: 4, objectPosition: "35% 20%",scale: 1},

    { name: "Yuzi Chahal", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750899154/yuvi_chahal_pic_znvpwu.webp", 
    role: "Bowler", batting: 12, bowling: 88, average: 25, stars: 3, objectPosition: "50% 20%",scale: 1},

    { name: "Axar Patel", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896476/Axar_patel_pic_buiars.jpg", 
    role: "All-Rounder", batting: 60, bowling: 75, average: 35, stars: 3, objectPosition: "60% 20%",scale: 1},

    { name: "Sanju Samson", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896621/sanju_samson_pic_dzhnaz.jpg", 
    role: "WK Batsman", batting: 78, bowling: 8, average: 44, stars: 4, objectPosition: "50% 20%",scale: 1},

    { name: "Kuldeep Yadav", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896766/kuldeep_yadav_pic_huta54.jpg", 
    role: "Bowler", batting: 25, bowling: 85, average: 28, stars: 3, objectPosition: "52% 20%",scale: 1},

    { name: "Sachin Tendulkar", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750896959/sachin_tendulkar_pic_ah8ewc.jpg", 
    role: "Batsman", batting: 99, bowling: 15, average: 44, stars: 5, objectPosition: "100% 20%", scale: 1},

    { name: "Yuvraj Singh", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750899153/yuvraj_singh_pic_p7inxz.webp", 
    role: "All-Rounder", batting: 85, bowling: 70, average: 40, stars: 5, objectPosition: "50% 20%", scale: 1},

    { name: "Bhuvneshwar K", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750899153/bhubneshwar_kumar_ndbfos.webp", 
    role: "Bowler", batting: 20, bowling: 85, average: 25, stars: 4, objectPosition: "45% 20%", scale: 1},

    { name: "Rishabh Pant", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750897994/RishabhPant_pic_vud8zu.jpg", 
    role: "WK Batsman", batting: 82, bowling: 5, average: 46, stars: 4, objectPosition: "50% 10%", scale: 1},

    { name: "Shreyas Iyer", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750899269/shreyas_iyer_pic_x0h3ej.avif", 
    role: "Batsman", batting: 80, bowling: 5, average: 42, stars: 4, objectPosition: "60% 20%", scale: 1},

    { name: "Mohammed Siraj", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750899268/mohammed_siraj_pic_l83qel.avif", 
    role: "Bowler", batting: 18, bowling: 85, average: 22, stars: 4, objectPosition: "100% 20%", scale: 1},

    { name: "Rahul Dravid", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750898529/rahul_dravid_pic_uufrex.jpg", 
    role: "Batsman", batting: 92, bowling: 20, average: 52, stars: 5, objectPosition: "74% 20%", scale: 1 },

    { name: "Gautam Gambhir", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750899268/gautam_gambhir_pic_n9hbnm.webp", 
    role: "Batsman", batting: 84, bowling: 10, average: 44, stars: 4, objectPosition: "100% 20%", scale: 1 },

    { name: "Virender Sehwag", image: "https://res.cloudinary.com/dxpfnowju/image/upload/v1750898709/virender_sehwag_pic_khafgd.jpg", 
    role: "Batsman", batting: 94, bowling: 35, average: 49, stars: 5, objectPosition: "36% 20%", scale: 1 },

    //{ name: "Glenn Maxwell", image: "...maxwell...", role: "All-Rounder", batting: 85, bowling: 65, average: 42, stars: 4 },
    // { name: "Brian Lara", image: "...lara...", role: "Batsman", batting: 98, bowling: 5, average: 45, stars: 5 },
    // { name: "AB de Villiers", image: "...ab...", role: "Batsman", batting: 96, bowling: 10, average: 53, stars: 5 },
    // { name: "Steve Smith", image: "...smith...", role: "Batsman", batting: 92, bowling: 8, average: 60, stars: 5 },
    // { name: "Kane Williamson", image: "...kane...", role: "Batsman", batting: 90, bowling: 8, average: 54, stars: 5 },
    // { name: "Ricky Ponting", image: "...ponting...", role: "Batsman", batting: 95, bowling: 12, average: 42, stars: 5 },
    // { name: "Jacques Kallis", image: "...kallis...", role: "All-Rounder", batting: 94, bowling: 85, average: 55, stars: 5 },
    // { name: "Shane Warne", image: "...warne...", role: "Bowler", batting: 60, bowling: 98, average: 25, stars: 5 },
    // { name: "Muttiah Muralitharan", image: "...murali...", role: "Bowler", batting: 40, bowling: 99, average: 23, stars: 5 },
    // { name: "Glenn McGrath", image: "...mcgrath...", role: "Bowler", batting: 20, bowling: 97, average: 21, stars: 5 },
    // { name: "Chris Gayle", image: "...gayle...", role: "Batsman", batting: 90, bowling: 10, average: 38, stars: 5 },
    // { name: "David Warner", image: "...warner...", role: "Batsman", batting: 88, bowling: 8, average: 45, stars: 4 },
    // { name: "Travis Head", image: "...head...", role: "Batsman", batting: 80, bowling: 5, average: 40, stars: 4 },
    // { name: "Ben Stokes", image: "...stokes...", role: "All-Rounder", batting: 85, bowling: 70, average: 48, stars: 5 },
    // { name: "Imran Khan", image: "...imran...", role: "All-Rounder", batting: 78, bowling: 90, average: 37, stars: 5 },
  ];
  
  export default players;
  