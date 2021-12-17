import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import EditImage from "../common/image/EditImage";

const EditorWrap = styled.div`
  padding-top: 2rem;
`;

const TitleInput = styled.input`
  font-size: 1.5rem;
  font-weight: bolder;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 1rem 0;
    text-indent: 1rem;
    min-height: 32rem;
  }
`;

const EditComponent = ({ onChangeField, imgURL, onChangeImage, editInfo }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const onChangeTitle = (e) => {
    const { value } = e.target;
    onChangeField({ key: "coktailName", value });
  };

  const onChangeBody = (cocktailContent) => {
    onChangeField({ key: "cocktailContent", value: cocktailContent });
  };

  return (
    <EditorWrap>
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="coktailName"
      />
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="sweet 1 ~ 10"
      />
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="sour 1 ~ 10"
      />
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="bitter 1~ 10"
      />
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="alcoholDegree 1 ~ 100"
      />
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="kind array"
      />
      <TitleInput
        value={editInfo.coktailName}
        onChange={onChangeTitle}
        placeholder="perifume array"
      />
      <QuillWrapper>
        <ReactQuill
          theme="snow"
          modules={modules}
          formoats={formats}
          value={editInfo.cocktailContent}
          onChange={(content, delta, source, editor) => {
            if (source === "user") {
              onChangeBody(editor.getHTML());
            }
          }}
        />
      </QuillWrapper>
      <EditImage imgURL={imgURL} onChangeImage={onChangeImage} />
    </EditorWrap>
  );
};

export default EditComponent;
