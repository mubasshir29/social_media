import React from 'react'
import CategoryBox from './CategoryBox'
import image1 from './../Images/NonVeg_Biryani.jpg'
import image2 from './../Images/idli_dosa.jpg'
import image3 from './../Images/Aloo_Samosa_2.jpg'
import image4 from './../Images/Paneer-Butter-Masala-Nut-Free.jpg'
import image5 from './../Images/fuice_juice_blog_sm.jpg'

function CorossolMenu() {
  return (
    <div className='w-full sm:w-[68rem] max-w-screen-xl mx-auto flex flex-col gap-4 items-center sm:flex sm:flex-row justify-between '>
        <CategoryBox category={{image:image1, name: "Non-Veg", path:'/non-veg'}}/>
        <CategoryBox category={{image:image2, name: "Breakfast", path:'/breakfast'}}/>
        <CategoryBox category={{image:image3, name: "Snacks", path:'/snacks'}}/>
        <CategoryBox category={{image:image4, name: "Vegetarian", path:'/veg'}}/>
    </div>
  )
}

export default CorossolMenu