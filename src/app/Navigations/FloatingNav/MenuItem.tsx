import React from 'react'

interface CompProps {
    childComp?: any;
    value?: number | string;
  }

type I = {
    apparel: any,
    mac: any,
    cars: any
}

function MenuItem({ childComp, value }:CompProps) {

    return (
        <div key={value} className="mt-8">
            <div className="text-center" key={value}>
                {childComp}
            </div>
            <div className="text-center">
                {value}
            </div>
        </div>
    )
}

export default MenuItem
