import classes from "./SubBlog.module.scss";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../data/blog";
import { useState } from "react";


function SubBlog() {

  

  const { blogId } = useParams();

  const product = getProduct(blogId);

  console.log(product);


  return (
    <div className={classes.SubBlog}>
      <div className={classes.background}>

      <div className={classes.title}>
              <h2>{product.name} <span>{product.name3}</span> <span className={classes.span}>{product.name2}</span></h2>
              <p>
                {product.text}
              </p>
            </div>


        <div className={classes.sub__container}>
          <div className={classes.content}>
            
            <div className={classes.user}>
              <div className={classes.user__width}>
                <div className={classes.img__container}>
                  <img alt="#" src={product.bro_1}/>
                </div>
                <div className={classes.user__name}>
                  <h2>
                    {product.user}
                  </h2>
                  <p>
                    {product.spec}
                  </p>
                </div>
              </div>
            </div>


            <div className={classes.iframe}>
              <iframe src={product.src} allow={product.allow} frameBorder={product.num} allowFullScreen >
              Ваш браузер не поддерживает этот iFRAME тег. Пожалуйста
              обновитесь!
              </iframe>
            </div>

            <div className={classes.text}>
              <p>
                {product.firstText}
              </p>
              <h2>
                {product.question}
              </h2>
              <p>
                {product.secondText}
              </p>
              <p>
                <span>
                  {product.instance}
                </span>
                <br/>
                {product.thirdText}
              </p>
              <p>
                {product.fourthText}
              </p>
              <h2>
                {product.question2}
              </h2>
              <ol>
                <li>
                  {product.list1}
                </li>
                <li>
                  {product.list2}
                </li>
                <li>
                  {product.list3}
                </li>
                <li>
                  {product.list4}
                </li>

              
              </ol>

              <p>
                {product.fivth}
              </p>
              <p>
                {product.sixth}
              </p>
            </div>

            <div className={classes.user}>
              <div className={classes.user__width}>
                <div className={classes.img__container}>
                  <img alt="#" src={product.bro_1}/>
                </div>
                <div className={classes.user__name}>
                  <h2>
                    {product.user}
                  </h2>
                  <p>
                    {product.spec}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SubBlog;
