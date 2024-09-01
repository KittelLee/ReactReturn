import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [clothes, setClothes] = useState("남자코트 추천");
  let [pen, setPen] = useState("모나미");
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function (a) {
    return "1233211";
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        {" "}
        정렬버튼{" "}
      </button>

      <div className="list">
        <h4>{글제목[1]} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4>
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <div className="list" style={{ paddingBottom: "10px" }}>
        <h4>{pen}</h4>
        <span onClick={() => setPen("제트스트림")}>클릭시 변경</span>
      </div>

      <div className="list">
        <h4>{clothes}</h4>
        <span
          onClick={() => {
            setClothes("여자 코트 추천");
          }}
        >
          ❗️추천변경하기
        </span>
        <p>2월 17일 발행</p>
      </div>
      {modal == true ? <Modal 글제목={글제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
