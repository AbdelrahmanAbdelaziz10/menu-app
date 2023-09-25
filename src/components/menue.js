import React, { useState } from 'react';
import { Container ,Row ,Col ,Button} from 'react-bootstrap';
import Meal from './Meal';
import { item } from './data';
import NavBar from './NavBar';

const Menu= () => {

  const[itemdata,setItemdata]=useState(item);
  
  const allCategory =["الكل", ...new Set(item.map((i)=>i.category))]
  console.log(allCategory)


  const filterCategory=(cat)=>{
    if(cat==="الكل"){
      setItemdata(item)
    } else {
    const newItem=item.filter((item)=>item.category=== cat)
    setItemdata(newItem)
    }
  }

  return (<>
    <NavBar setItemdata={setItemdata}/>
    <Container>
    <Row className='text-center menu justify-content-center'>
    <h1 className='mt-3 '>قائمة الطعام </h1>
    <div className='underline'></div>

    </Row>
    <Row className='d-flex text-center justify-content-center my-4 mb-4'>
    <Col>
    {
      allCategory.length>=1 ? allCategory.map((item)=>{
        return  (
          <Button onClick={()=>filterCategory(item)} key={Math.random()} className='me-2 border b-light' variant="light">{item}</Button>
          )
      })
      :null
    }
    </Col>
    </Row>
    <Meal itemdata={itemdata} />



    </Container>
    </>
  )
}

export default Menu;
