import './Home.css'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Card from '../component/Card'
let obj = [
    {
        image: './public/image/user3.jpg',
        name: 'Emily Fisher',
        post: 'Senior Web Developer',
        followers: '4.2K',
        following: '350'
    },
    {
        image: './public/image/user2.jpg',
        name: 'Emma Evans',
        post: 'Art Director',
        followers: '10.2K',
        following: '200'
    },
    {
        image: './public/image/user1.jpg',
        name: 'Brie Larson',
        post: 'Front-end Developer',
        followers: '1.6K',
        following: '852'
    },
    {
        image: './public/image/user1.jpg',
        name: 'Brie Larson',
        post: 'Front-end Developer',
        followers: '2.2K',
        following: '960'
    },
    {
        image: './public/image/user1.jpg',
        name: 'Brie Larson',
        post: 'Front-end Developer',
        followers: '4.8K',
        following: '544'
    },
    {
        image: './public/image/user1.jpg',
        name: 'Brie Larson',
        post: 'Front-end Developer',
        followers: '7.1K',
        following: '987   '
    }
]

function Home() {


    return (
        <>

            <Navbar />
            <Hero />

            <h1 className='profile_card_heading'>Profile Card</h1>
            <div className="card_main">

                {obj.map((val) => {
                    return <Card image={val.image} name={val.name} post={val.post} followers={val.followers} following={val.following} />

                })}



            </div>


        </>

    )
}

export default Home