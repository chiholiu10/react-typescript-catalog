import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

interface StateToProps {
    cast: any;
    summary: any;
    currentIndex: number;
}

export const Cast: React.FC<StateToProps> = ({ cast, summary, currentIndex }) => {
    const Image = styled.img`
        width: 80%;
    `;
    
    return (
        <div>
            <div className='flex-item-left'>
                {summary[currentIndex].show.image !== null ? 
                    <Image src={ summary[currentIndex].show.image.medium } alt={ summary[currentIndex].show.name }/> :
                    <Image src='https://i.ibb.co/1LH6TZb/fallback-image.png' alt={ summary[currentIndex].show.name }/>
                }
                <h1>Cast</h1>

                <ul className='unordered-list'>
                    {cast.map((actor: any, index: number) => {
                        return (
                            <li key={ index }>
                                <ReactMarkdown source={ actor.person.name }/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cast: state.catalogData.castList || [],
        summary: state.catalogData.catalogInfo.data || [],
        currentIndex: state.catalogData.summaryIndex,
        
    }
}

export default connect(mapStateToProps)(Cast);
