import React from 'react'

interface CompProps {
    childComp?: any;
    value?: number | string;
  }

function MenuItem({ childComp, value }:CompProps) {

    return (
        <div key={value} className="mt-8">
            <div className="text-center" key={value}>
                {childComp}
            </div> 
            <div className="text-center"> 
                {value}
            </div><div></div>
        </div>
    )
}

export default MenuItem
