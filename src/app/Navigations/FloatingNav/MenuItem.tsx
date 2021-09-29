import React from 'react'

interface CompProps {
    childComp?: any;
    value?: number;
  }

function MenuItem({ childComp, value }:CompProps) {

    return (
        <div key={value} className="justify-items-center mt-8">
            <div className="" key={value}>
                {childComp}
            </div>
            <div className="text-center">
                {value}
            </div>
        </div>
    )
}

export default MenuItem
