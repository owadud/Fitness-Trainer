import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog'>
            <div className="authorizations">
                <h2> Difference between authorization and authentication</h2>
                <table>
                    <tr>
                        <th className='primary'>Authentication</th>
                        <th className='primary'>Authorization</th>
                    </tr>
                    <tr>
                        <td>It require usually user's login details.</td>
                        <td>While it require user's privilege or security levels.</td>
                    </tr>
                    <tr>
                        <td>It determines the person is user or not.</td>
                        <td>It Checks what permissions are allowed for the user.</td>
                    </tr>
                    <tr>
                        <td>It is done before the the authorization process is executed.</td>
                        <td>It is done after the Authentication process</td>
                    </tr>
                    <tr>
                        <td>In authentication process, users or persons are verified.</td>
                        <td>While in this process, users or persons are validated.</td>
                    </tr>
                    

                </table>
            </div>
            <div className="firebase">
                <h2> Why are you using firebase? </h2>
                <p> Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.Firebase manages all data real-time in the database. You can create Application without backend server,No SQL database so it is more faster. There are lots of benefits and reason that you should use firebase. </p>  

                <h2>What other options do you have to implement authentication?</h2>
                <ul>
                    <li><a href="https://parseplatform.org/">Parse</a></li>
                    <li> <a href="https://www.back4app.com/">Back4App</a></li>
                    <li> <a href="https://aws.amazon.com/amplify/?tag=rigorousthemes-20">AWS Amplify</a></li>
                    <li> <a href="https://kuzzle.io/">Kuzzle</a></li>
                    <li> <a href="https://www.couchbase.com/">Couchbase</a></li>
                    <li> <a href="https://nativescript.org/">NativeScript</a></li>
                   
                </ul>
                
            </div>
            <div className="other">
                <h2>What other services does firebase provide other than authentication?</h2>
                <ul>
                    <li>There are multiple support channels</li>
                    <li>There's no risk of vendor lock-in</li>
                    <li>You can deploy in any cloud</li>
                    <li>You can play with the software much more freely so you have full control over the source code</li>
                    <li>It's easier to scale and consolidate</li>
                    <li>Coding and app development is faster with an open-source platform</li>
                </ul>
            </div>

        </div>
    );
};

export default Blog;