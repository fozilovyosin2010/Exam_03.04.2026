import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

import img1S1 from "../img/img1S1.png";
import img2S1 from "../img/img2S1.png";

import cardImg1 from "../img/cardImg1.png";
import img1 from "../img/img1.png";
import cardImg2 from "../img/cardImg2.png";
import cardImg3 from "../img/cardImg3.png";
import cardImg4 from "../img/cardImg4.png";
import cardImg5 from "../img/cardImg5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Box from "../Component/Box";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import i18next from "i18next";

const nftData = [
  {
    id: 1,
    name: "Sun-Glass",
    price: "1.75",
    img: cardImg1,
    time: "07h 09m 12s",
  },
  {
    id: 2,
    name: "Sun-Glass",
    price: "1.75",
    img: img1,
    time: "07h 09m 12s",
  },
  {
    id: 3,
    name: "NuEvey",
    price: "1.25",
    img: cardImg2,
    time: "19h 09m 12s",
  },
  {
    id: 4,
    name: "NuEvey",
    price: "1.75",
    img: cardImg3,
    time: "07h 09m 12s",
  },
  {
    id: 5,
    name: "NuEvey",
    price: "1.75",
    img: cardImg4,
    time: "07h 09m 12s",
  },
  {
    id: 6,
    name: "NuEvey",
    price: "1.75",
    img: cardImg5,
    time: "07h 09m 12s",
  },
];

const tableData = [
  {
    id: 1,
    img: cardImg1,
    name: "Alex Ca.",
    author: "Alex",
    vol: "8,456",
    change: "+ 27.78%",
    floor: "3,5",
    owners: "2.2K",
    items: "500",
  },
  {
    id: 2,
    img: cardImg2,
    name: "Alex Ca.",
    author: "Alex",
    vol: "4,780",
    change: "+ 27.78%",
    floor: "7,9",
    owners: "3.4K",
    items: "900",
  },
  {
    id: 3,
    img: cardImg3,
    name: "Alex Ca.",
    author: "Alex",
    vol: "4,780",
    change: "+ 27.78%",
    floor: "7,9",
    owners: "3.4K",
    items: "900",
  },
  {
    id: 4,
    img: cardImg4,
    name: "Alex Ca.",
    author: "Alex",
    vol: "4,780",
    change: "+ 27.78%",
    floor: "7,9",
    owners: "3.4K",
    items: "900",
  },
];

const reducer = (state, action) => {
  // del
  if (action.key === "del") {
    const arr = state.data.filter((e) => e.id !== action.val);

    return { ...state, data: arr };
  }

  // add
  else if (action.key === "add") {
    const obj = {
      id: new Date().getTime(),
      ...action.val,
    };

    return { ...state, data: [...state.data, obj] };
  }

  // edit
  else if (action.key === "edit") {
    const obj = {
      ...action.val,
      id: state.idxEdit,
    };

    const arr = state.data.map((e) => {
      if (e.id === obj.id) {
        e = { ...e, ...obj };
      }
      return e;
    });

    return { ...state, data: arr };
  }

  // edit open
  else if (action.key === "openEdit") {
    const { id, name, price } = action.val;

    const obj = {
      idxEdit: id,
      nameEdit: name,
      priceEdit: price,
    };

    // console.log(obj);

    return { ...state, ...obj };
  }
};

const initialValue = {
  data: [
    {
      id: 1,
      name: "Sun-Glass",
      price: "1.75",
      img: cardImg1,
      time: ["07", "09"],
    },
    {
      id: 2,
      name: "Sun-Glass",
      price: "1.75",
      img: img1,
      time: ["07", "09"],
    },
    {
      id: 3,
      name: "NuEvey",
      price: "1.25",
      img: cardImg2,
      time: ["19", "09"],
    },
    {
      id: 4,
      name: "NuEvey",
      price: "1.75",
      img: cardImg3,
      time: ["07", "09"],
    },
    {
      id: 5,
      name: "NuEvey",
      price: "1.75",
      img: cardImg4,
      time: ["07", "09"],
    },
    {
      id: 6,
      name: "NuEvey",
      price: "1.75",
      img: cardImg5,
      time: ["07", "09"],
    },
    {
      id: 7,
      name: "NuEvey",
      price: "1.75",
      img: img1,
      time: ["07", "09"],
    },
    {
      id: 8,
      name: "NuEvey",
      price: "1.75",
      img: cardImg2,
      time: ["07", "09"],
    },
  ],

  idxEdit: null,
  nameEdit: "",
  priceEdit: "",
  imgEdit: "",
  timeEdit: "",
};

const Home = () => {
  const { t } = useTranslation();

  const swipeRef = useRef();

  const handlePrev = useCallback(() => {
    if (swipeRef.current) {
      swipeRef.current.slidePrev();
    }
  }, []);
  const handleNext = useCallback(() => {
    if (swipeRef.current) {
      swipeRef.current.slideNext();
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, initialValue);

  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = (elem) => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();

    const form = event.target;

    const time = form.time.value.split(":");

    const obj = {
      name: form.name.value.trim(),
      price: form.price.value.trim(),
      time: time,
      img: URL.createObjectURL(form.img.files[0]),
    };

    dispatch({ key: "add", val: obj });

    handleCloseAdd();
  };

  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = useCallback((elem) => {
    setOpenEdit(true);
    setTimeout(() => {
      dispatch({ key: "openEdit", val: elem });
    }, 0);
  }, []);

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  // handlers

  const handleDel = useCallback((id) => {
    dispatch({ key: "del", val: id });
  }, []);

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const form = event.target;

    const obj = {
      name: form.name.value.trim(),
      price: form.price.value.trim(),
    };

    dispatch({ key: "edit", val: obj });

    handleCloseEdit();
  };

  const acList = [
    "What is an NFT?",
    "What can I use NFTs for?",
    "What is the difference between an NFT and cryptocurrency?",
    "How much is an NFT worth?",
    "How do I purchase an NFT on your platform ?",
  ];

  const acListRu = [
    "Что такое NFT?",
    "Для чего можно использовать NFT?",
    "В чем разница между NFT и криптовалютой?",
    "Сколько стоит NFT?",
    "Как купить NFT на вашей платформе?",
  ];

  const acListTj = [
    "NFT чист?",
    "Ман NFT-ро барои чӣ истифода бурда метавонам?",
    "Фарқи байни NFT ва криптовалюта дар чист?",
    "Арзиши NFT чанд аст?",
    "Чӣ тавр ман метавонам дар платформаи шумо NFT харам?",
  ];

  const [openInfo, setOpenInfo] = React.useState(false);

  const [objInfo, setObjInfo] = useState(null);

  const handleClickOpenInfo = (elem) => {
    setOpenInfo(true);

    setObjInfo(elem);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  return (
    <div>
      <section className="relative max-w-[1440px] pl-[20px] m-[0_auto] mr-0 py-10">
        <div className="px-4 flex items-center justify-between max-sm:flex-col gap-10">
          {/* block1 */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              {t("hero.title")}
            </h1>

            <p className="text-gray-500 mb-6 max-w-md">{t("hero.desc")}</p>

            <div className="flex gap-4 mb-8">
              <button className="bg-black text-white px-6 py-3 rounded-lg">
                {t("hero.btnExplore")}
              </button>
              <button className="border px-6 py-3 rounded-lg">
                {t("hero.btnCreate")}
              </button>
            </div>

            <div className="flex gap-10 text-sm">
              <div>
                <h3 className="font-bold text-lg">430K+</h3>
                <p className="text-gray-400">{t("hero.stats1")}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">159K+</h3>
                <p className="text-gray-400">{t("hero.stats2")}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">87K+</h3>
                <p className="text-gray-400">{t("hero.stats3")}</p>
              </div>
            </div>
          </div>

          {/* block2 */}
          <div className="flex-1 flex">
            <img
              src={img1S1}
              className="max-w-[391px] rounded-2xl shadow-lg max-md:max-w-[279px]"
            />

            <img
              src={img2S1}
              className="absolute max-w-[320px] right-0 bottom-0 w-60 rounded-2xl max-md:max-w-[227px]"
            />

            {/* ARROWS */}
            <div className="absolute bottom-[-20px] flex gap-2 bg-white px-4 py-2 rounded-xl shadow">
              <button className="cursor-pointer">←</button>
              <button className="cursor-pointer">→</button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#f8f8f8]">
        <div className="sec px-4">
          <h2 className="text-center text-2xl font-semibold text-gray-400 mb-10">
            {t("weekly.title")}
          </h2>

          <Swiper
            onSwiper={(swiper) => (swipeRef.current = swiper)}
            spaceBetween={80}
            centeredSlides={false}
            slidesPerView={"auto"}
          >
            {nftData.map((item) => (
              <SwiperSlide key={item.id} className="!w-[260px]">
                <Box {...item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ARROWS (manual) */}
          <div className="mt-10 flex justify-center  gap-4">
            <div className="bg-[#fff] rounded-[20px] flex justify-between gap-3 p-[10px_15px]">
              <button onClick={handlePrev} className="px-4 py-2 ">
                ←
              </button>
              <div className="h-full w-[1px] bg-[#ddd]"></div>
              <button onClick={handleNext} className="px-4 py-2 ">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-auto px-[40px]">
        <div className="overflow-x-auto sec">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 text-left text-sm border-b border-gray-50">
                <th className="p-[30px] font-normal">{t("table.col")}</th>
                <th className="pb-4 font-normal text-right pr-4">
                  {t("table.vol")}
                </th>
                <th className="pb-4 font-normal text-right pr-4 max-sm:hidden">
                  {t("table.h24")}
                </th>
                <th className="pb-4 font-normal text-right pr-4 max-sm:hidden">
                  {t("table.floor")}
                </th>
                <th className="pb-4 font-normal text-right pr-4 max-sm:hidden">
                  {t("table.owners")}
                </th>
                <th className="pb-4 font-normal text-right max-sm:hidden">
                  {t("table.items")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-gray-50/50 transition-all"
                >
                  <td className="py-5 flex items-center gap-4">
                    <img
                      src={item.img}
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} shadow-inner shrink-0`}
                    />
                    <div>
                      <div className="font-bold text-lg text-gray-900 leading-tight">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {t.by} {item.author}
                      </div>
                    </div>
                  </td>

                  <td className="py-5 text-right pr-4">
                    <div className="flex items-center justify-end gap-1 font-bold text-gray-900">
                      <span className="text-xs">◆</span> {item.vol}
                    </div>
                  </td>

                  <td className="max-sm:hidden py-5 text-right pr-4 font-semibold text-emerald-500">
                    {item.change}
                  </td>

                  <td className="max-sm:hidden py-5 text-right pr-4">
                    <div className="flex items-center justify-end gap-1 font-bold text-gray-900">
                      <span className="text-xs">◆</span> {item.floor}
                    </div>
                  </td>

                  <td className="max-sm:hidden py-5 text-right pr-4 font-semibold text-gray-800">
                    {item.owners}
                  </td>

                  <td className="max-sm:hidden py-5 text-right font-semibold text-gray-800">
                    {item.items}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="sec p-[40px_20px]">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900">
          {t("box.title")}
        </h2>

        {/* Фильтры как в Figma */}
        <div className="flex justify-center gap-3 mb-16">
          {[t("box.cat"), t("box.col"), t("box.pr")].map((filter) => (
            <button
              key={filter}
              className="px-5 py-2 border border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 flex items-center gap-2 hover:bg-gray-100 transition-all"
            >
              {filter} <span className="text-[10px] opacity-40">▼</span>
            </button>
          ))}
        </div>

        <div className="py-3 flex justify-end">
          <IconButton
            onClick={handleClickOpenAdd}
            sx={{ color: "blue", borderRadius: "100%", border: "2px solid" }}
          >
            <AddIcon />
          </IconButton>
        </div>
        <div className="grid max-md:grid-cols-1 grid-cols-4 gap-[50px] px-[20px]">
          {state.data.map((item) => (
            <div
              key={item.id}
              className="w-[260px] max-lg:w-[180px] max-md:w-full"
            >
              <Box
                id={item.id}
                img={item.img}
                time={item.time}
                name={item.name}
                price={item.price}
                todo={true}
                btnDel={handleDel}
                btnEdit={handleClickOpenEdit}
                btnInfo={handleClickOpenInfo}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="sec p-[40px_20px]">
        <div className="">
          <div className="flex flex-col justify-between gap-4 items-center ">
            <div className="flex flex-col justify-center items-center text-[50px] font-[700]">
              <div>{t("com.t1")}</div>
              <div className="text-gray-400 text-[70px]">{t("com.t2")}</div>
            </div>
            <button className="bg-[#000] text-[#fff] p-[20px_15px] rounded-2xl">
              {t("com.btn")}
            </button>
          </div>
          <div className="accourdion">
            <div>
              {i18next.language == "en"
                ? acList.map((e, i) => {
                    return (
                      <Accordion key={i}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <Typography component="span">{e}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })
                : i18next.language == "ru"
                  ? acListRu.map((e, i) => {
                      return (
                        <Accordion key={i}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography component="span">{e}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse malesuada lacus ex, sit amet
                              blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })
                  : acListTj.map((e, i) => {
                      return (
                        <Accordion key={i}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography component="span">{e}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse malesuada lacus ex, sit amet
                              blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
            </div>
          </div>
        </div>
      </section>

      <section className="sec p-[40px_20px] max-sm:pb-[180px]">
        <div className="bg-[#000] text-[#fff] p-[40px_20px] rounded-2xl flex justify-between max-sm:flex-col max-md:items-center relative">
          <div className="block1 flex flex-col justify-between py-[30px]">
            <div>
              <h1 className="text-[40px] font-[700]">{t("sec.t1")}</h1>
              <div className="text-gray-500 text-[30px] font-[500] max-md:text-[16px]">
                {t("sec.t2")}
              </div>
            </div>
            <div className="flex gap-3">
              <button className="p-[8px_16px] w-full rounded-[15px] bg-[#fff] text-black">
                {t("sec.btn2")}
              </button>
              <button className="p-[8px_16px] w-full rounded-[15px] bg-[#000] border-[#fff] border">
                {t("sec.btn1")}
              </button>
            </div>
          </div>
          <img
            src={img1}
            alt=""
            className="max-w-[390px] max-md:w-[290px] max-sm:absolute max-sm:w-[190px] bottom-[-150px]"
          />
        </div>
      </section>

      {/* add modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitAdd} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="img"
              name="img"
              label="Image"
              type="file"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="time"
              name="time"
              label="Time"
              type="time"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>

      {/* info modal */}

      <Dialog
        open={openInfo}
        onClose={handleCloseInfo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Info modal</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box
              id={objInfo?.id}
              img={objInfo?.img}
              time={objInfo?.time}
              name={objInfo?.name}
              price={objInfo?.price}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ bgcolor: "red" }}
            onClick={handleCloseInfo}
          >
            Disagree
          </Button>
          <Button variant="contained" onClick={handleCloseInfo} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/* edit modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitEdit} id="subscriptionEdit-form">
            <TextField
              defaultValue={state.nameEdit}
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              defaultValue={state.priceEdit}
              autoFocus
              required
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button type="submit" form="subscriptionEdit-form">
            edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
