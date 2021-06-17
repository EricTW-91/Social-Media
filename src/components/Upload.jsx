import React, { useState, useEffect } from 'react';

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    })
}




const Upload = (props) => {
    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        const images = localStorage.getItem('images')
        if (images === null) {
            localStorage.setItem('images', JSON.stringify([]))
        }
    }, [])

    const imgUpload = (e) => {
        const file = e.target.files[0];
        getBase64(file).then(base64 => {
            const images = JSON.parse(localStorage.getItem('images'));
            let arr = new Array;
            if (images !== null) {
                arr = [base64, ...images]
            }
            console.log(arr)
            localStorage.setItem('images', JSON.stringify(arr));

            // // Get img
            setImgArr(JSON.parse(localStorage.getItem('images')))


        })


    }

    return (
        <>
            <input type='file' name='uploadImg' onChange={imgUpload }/>
            {imgArr.map(imgUrl => {
               return <img style={{width: '500px'}} src={ imgUrl } />

            })}
        </>
     );
}
 
export default Upload;