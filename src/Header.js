import * as rd from 'react';
export const Header = function(propsu)  {
    console.log(propsu);
    const pass = propsu.pass;
    let answer = "";
    const div = <div onClick={alert('kmsbabo')}>a</div>
    const div2 = rd.createElement('div');

    
    for (let key in pass) {
        answer += `${key} : ${pass[key]}`

    }
    console.log(div.props);
    
    return div
    
        
}



