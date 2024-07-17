import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
  <div class="card" style={{marginLeft:10}}>
  <div class="card-body" style={{marginRight:-25}}>
    <a class="navbar-brand" href="#" style={{color:'green'}}>𝕹𝕾𝕬</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
</div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"style={{color:'white'}}>𝘼𝘿𝘿-𝙎𝙐𝘽</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewsub" style={{color:'white'}}>𝙑𝙄𝙀𝙒-𝙎𝙐𝘽</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/searchsub" style={{color:'white'}}>𝙎𝙀𝘼𝙍𝘾𝙃-𝙎𝙐𝘽</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/deletesub" style={{color:'white'}}>𝘿𝙀𝙇𝙀𝙏𝙀-𝙎𝙐𝘽</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
