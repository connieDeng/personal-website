import React from 'react';

export default function ProjCard({projContent}) {
    return (
        <main className='proj-card-container' style={{textAlign:'center'}}>
            <a className='proj-card' href={projContent.link} target='_blank' rel='noopener noreferrer'>
                <section style={{width:'50%'}}>
                    {/* <img src="/images/fillerImg.jpg"
                        style={{height:'40px', width:'40px'}}
                    >
                    </img> */}
                    <section>
                        <div>{projContent.title}</div>
                        <div>{projContent.shortDescription}</div>
                    </section>
                </section>
            </a>
        </main>
    );
  }