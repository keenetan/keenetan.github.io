import React from 'react'
import 'antd/dist/antd.css'
import { Button, Typography } from 'antd'
import $ from 'jquery'
import TypeIt from "typeit-react";
import FlipMove from 'react-flip-move';
import '../../css/About.css'


const styles = {

    parent: {
        paddingTop: '8%',
        paddingLeft: '15%',
        paddingRight: '15%'
    },
    description: {
        paddingBottom: '1rem',
    },
    read: {
        marginBottom: '1rem'
    },
    flip: {
        paddingBottom: '10%'
    }
}

const About = (props) => {

    const [showMore, setShowMore] = React.useState(true)

    const shortDescription = 'I am a student based in Singapore, passionate in learning and making the world better. about building clean, beautiful web and mobile applications.'
    const longDescription = 'Currently, I am enrolled at Ngee Ann Polytechnic, where I am pursuing a diploma in Information Technology and a minor in psychology.<br><br>The majority of my knowledge and experience has been gained through personal projects and YouTube. Outside of programming, water polo has always been my passion, both as a player and a fan.Currently, I play at an amateur level in Singapore and also support the Pro Recco team.In the future, I aspire to delve further into the fields of computer science, physics, and mathematics.<br> On a more recreational note, I derive great enjoyment from immersing myself in the wonders of nature through travel and exploration.'


    const update = () => {

        if (showMore) { 
            $('#readMoreButton').html('read less...') 
            $('#description').css('padding-bottom', '20%') 
        } else { 
            $('#readMoreButton').html('read more...') 
            $('#description').css('padding-bottom', '2%') 
        }

    }

    return (
        <div id='parent' style={styles['parent']}>
            <Typography id='title'> Hello! </Typography>

            <FlipMove style={styles['flip']}>

                { showMore && <div id='description' style={styles['description']}>
                    <TypeIt
                        id='typewriter'
                        options={{
                            strings: [shortDescription],
                            speed: 5,
                        }}
                    />
                </div> }

                <div id='read' style={styles['read']}>
                    <Button id='readMoreButton' onClick={ () => { setShowMore(!showMore); update(); }} type='primary' danger> {showMore ? 'read more...' : 'read less...'} </Button>
                </div>

                { !showMore && <div id='description' style={styles['description']}>
                    <TypeIt
                        id='typewriter'
                        options={{
                            strings: [longDescription],
                            speed: 5,
                        }}
                    />
                </div> }

            </FlipMove>
            
            
        </div>
    )
}

export default About