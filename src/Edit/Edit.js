import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function Edit() {
  return (
    <div className=''>
      <div className='m-3 mb-5'  >
        <h1 className='container text-center'>Edit your Fesa</h1>
        <div className='p-2 ' >
          <Card className='w-50 mx-auto' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--PiVc8dXj--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e2ymn14orzpgtbny0wzt.png"
              style={{ height: '150px' }} />
            <Card.Body className='bg-dark text-white'>
              <Card.Title> lorengduidbgd </Card.Title>

              <label className='mt-3'>Project Name</label>
              <input className='form-control' type="text" placeholder='Project Name' />
              <label className='mt-3'>Project info</label>
              <textarea className='form-control mt-1' type="text" placeholder='enter your data' />
              <Button className='mt-3 w-25 mx-auto' variant="primary">Post</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Edit