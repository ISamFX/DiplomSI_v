import styled from "./style.module.scss"
import figure from "../../img/Group72.svg"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { teamSelector } from "../../redux/team/teamSelecror"
import { fetchTeam, TeamMember } from "../../redux/team/teamSlice"
import { useAppDispatch, RootState } from "../../store"

const Team =() => {
    const dispatch = useAppDispatch();
    const team = useSelector((state: RootState) => teamSelector(state));

    useEffect(() => {
        dispatch(fetchTeam());
    }, [dispatch]);
 
    // console.log(team);
 
    return (
        <div>
            <div className={styled.container} id="team">
                <img  src={figure} alt="круги" className={styled.teamFigure}/> 
            </div>    
            <div>           
                <div className={styled.container_team}>
                     {team.isLoading && team.data.length === 0 ? (
                        <p>...loading</p>) : (
                        <ul className={styled.list_team_container}>
                            {team.data.map((item: TeamMember) => (
                            <li key={item.id} className={styled.list_team}>
                                <img src={item.imgUrl} className={styled.team_image} alt={item.name} />
                                <p className={styled.team_name}>{item.name}</p>
                                <p className={styled.team_role}>{item.role}</p>
                            </li>
                             ))}
                        </ul>
                     )}
                </div>   
            </div>
            <div>
                <h2 className={styled.team_heading}>Наша команда</h2>
            </div> 
        </div>    
    );
}

export default Team;