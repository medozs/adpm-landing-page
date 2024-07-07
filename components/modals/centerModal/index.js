// import { Button } from "@/components/button"
import { Modal, Container, Backdrop, CircularProgress } from "@mui/material"

export const AlertCenterModal = (props) => (
  <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={props.open}
    onClose={props.handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
      <Container>
        <div className="flex justify-center items-center w-full right-0 left-0 top-0 bottom-0 absolute">
          <div className="bg-white rounded-2xl w-full p-5 space-y-6 mx-auto md:max-w-[600px]">
            {props.children}
          </div>
        </div>
      </Container>
  </Modal>
)

export const LoadingProgress = (props) => (
  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
        className="absolute top-1/2 bottom-1/2"
      >
        <div className="flex justify-center items-center">
          <CircularProgress size={40}/>
        </div>
      </Modal>
)