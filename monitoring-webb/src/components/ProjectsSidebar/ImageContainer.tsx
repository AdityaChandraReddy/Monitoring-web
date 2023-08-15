import React, { useRef, useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
// import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import Projects from '../../api/addProject';

interface props {
    // addRoomModal: boolean
    selectedRoom: number | undefined
    projectName?: string
    projectId?: string
    selectedImage: any
}
// interface images {
//     imageLink :string
// }

// var items = [
//     {
//         name: "Random Name #1",
//         description: "Probably the most random thing you have ever seen!"
//     },
//     {
//         name: "Random Name #2",
//         description: "Hello World!"
//     }
// ]
const ImageContainer = ({ selectedRoom, projectName, projectId, selectedImage }: props) => {

    const [roomImages, setRoomImages] = useState<any>(selectedImage);


    // const getRoomImages = async () => {

    //     const addProject = new Projects();
    //     const resp = await addProject.getRoomImages(selectedRoom)
    //     console.log('response of image', resp)
    // }

    // useEffect(() => {
    //     getRoomImages()


    // }, [])


    const imageSubmitHandler = async (e: any) => {
        console.log('e', e.target.files[0])
        let gi = e.target.files[0]
        const formData = new FormData()
        setRoomImages((prev: any) => {
            console.log(prev)
            // let temp = []
            let temp = prev && JSON.parse(prev) || []

            temp.push({ link: gi })
            console.log(JSON.stringify(temp))
            return JSON.stringify(temp)
        })
        formData.append('files', gi)
        formData.append('roomId', `${selectedRoom}`)
        formData.append('images', JSON.stringify(roomImages))

        const addProject = new Projects();
        const resp = await addProject.addImageForRoom(formData)
        console.log('response a image room', resp)
        // await fetch('http://localhost:8000/api/uploadProfilePic/', {
        //   method: "POST",
        //   headers: {
        //     "Contetnt-Type": "multipart/form-data"
        //   },
        //   body: formData

        // }).then((res) => {
        //   console.log('res', res.json())
        // })
    }
    const imagegUpload = useRef<any>(null)
    return (
        <div className='image-main-Container'>ImageContainer
            <div className='add-imageForRoom'>
                <input
                    ref={imagegUpload}
                    onChange={(e) => {
                        imageSubmitHandler(e)
                    }} type='file' name='room-pic' style={{ display: "none" }} accept='image/*' />

                <Button variant="outlined" startIcon={<Add />} onClick={() => {
                    imagegUpload?.current?.click()!;
                }}>
                    Upload Image
                </Button>

            </div>
            <div className='room-images-courosal' >
                <div>

                    <Carousel autoPlay={false} NextIcon={true} indicators >
                        {roomImages && JSON.parse(roomImages).map((image: any) => <ImageItem key={image} image={image} link={`http://localhost:8000/${image}`} />)}
                        {/* {items.map((item, i) => <ImageItem key={i} item={item} />)} */}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}


function ImageItem(props: any) {
    return (
        <Paper style={{ height: "90vh" }} >
            <h2>{props.image}</h2>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
            <img width="100%" height="100%" src={props.link} />
        </Paper>
    )
}
export default ImageContainer