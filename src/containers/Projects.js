import React, { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectList';

const Projects = () => {

    const projects = [
        {name: "Pulse Gym Management", 
        type: "Python full-stack web app", 
        description: "Python full-stack web app, designed and built as a solo project, that enables gym staff to manage memberships, classes and bookings - built over 5 days using Python, Flask & PostgreSQL.", 
        image: "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_home_page_ss.png", 
        detailImages: [
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_home_page_ss.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_edit_member_details_ss1.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_classes_list_ss2.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_class_bookings_ss3.png", 
            "/assets/images/project_videos_and_screenshots/pulse_ss/pulse_booking_details_ss4.png"
        ], 
        video: "https://youtu.be/umg7LK-LQTo", 
        github:"https://github.com/CLg003/Pulse_Gym_Management"
        },
        {name: "NBA 75", 
        type: "React/REST API web app", 
        description: "React web app, designed and built as a solo assignment, that uses data from a REST API to display player details and stats for the NBA's 75th Anniversary Greatest Players of All Time - built over 2 days using JavaScript, React and a REST API. Please note that, due to request limits on the API, I had to amend the remit of this app to show the 25 greatest NBA players of all time!", 
        image: "/assets/images/project_videos_and_screenshots/nba_ss/nba_main_ss.png", 
        detailImages: [
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_main_ss.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_jordan_focus_ss1.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_giannis_stats_ss2.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_barkley_focus_ss3.png", 
            "/assets/images/project_videos_and_screenshots/nba_ss/nba_search_team_focus_ss4.png"
        ], 
        video: "https://youtu.be/C5yXNXXEtbc", 
        github:"https://github.com/CLg003/NBA_75th_Anniversary_Players"
        },
        {name: "Triolingo", 
        type: "React full-stack web app", 
        description: "React full-stack educational web app, designed and built as a group project, to teach Spanish to primary-aged children using a variety of lesson formats and quizzes - built over 5 days using JavaScript, React, Express and MongoDB. Please note that the video for this project has audio.", 
        image: "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson2_reset_ss.png", 
        detailImages: [
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_landing_screen_ss.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson1_quiz_ss1.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson2_in_progress_ss2.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_lesson3_inprogress_ss3.png", 
            "/assets/images/project_videos_and_screenshots/triolingo_ss/triolingo_game_inprogress_ss4.png"
        ], 
        // video: "https://www.youtube.com/watch?v=WyMdT1xsBMg", 
        video: "https://youtu.be/WyMdT1xsBMg", 
        github:"https://github.com/CLg003/TrioLingo"
        }
        // {name: "Project 4", type: "Project type here", description: "Project description here."},
        // {name: "Project 5", type: "Project type here", description: "Project description here."},
        // {name: "Project 6", type: "Project type here", description: "Project description here."}
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    // const [learnMore, setLearnMore] = useState(false);

    // useEffect(() => {setLearnMore(true)}, [selectedProject]);
    // useEffect(() => {setLearnMore(false)}, [!selectedProject]);

    const selectProject = function(index) {
        setSelectedProject(index);
    }

    const clearSelectedProject = function(){
        setSelectedProject(null);
    }

    // const updateLearnMore = function() {

    // }

    return (
        <div id="projects">
            <h2>Projects</h2>
            <ProjectList projects={projects} selectedProject={selectedProject} selectProject={selectProject} clearSelectedProject={clearSelectedProject}/>
        </div>
    );

}

export default Projects;