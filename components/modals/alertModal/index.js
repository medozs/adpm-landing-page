import {
    BsCheckCircleFill,
    BsXCircleFill,
    BsFillQuestionCircleFill,
  } from "react-icons/bs"
  import { AlertCenterModal } from "../centerModal"
  import { useDispatch, useSelector } from "../../../hooks"
  import { alert, onAlert } from "../../../redux/slices/utils"
  import { Button } from "@mui/material"
  
  const statusIcon = {
    confirm: (
      <BsFillQuestionCircleFill className="text-yellow-500 mx-auto" size={42} />
    ),
    success: <BsCheckCircleFill className="text-green-600 mx-auto" size={42} />,
    error: <BsXCircleFill className="text-red-600 mx-auto" size={42} />,
  }
  
  export const AlertModal = () => {
    const dataAlert = useSelector(alert)
    
    const dispatch = useDispatch()
  
    const handleClose = () => {
      if (dataAlert?.onClose) {
        dataAlert?.onClose()
      }
      dispatch(onAlert(null))
    }
  
    const handleOk = () => {
      if (dataAlert?.onOk) {
        dataAlert?.onOk()
      }
    }
  
    return (
      <AlertCenterModal open={dataAlert?.type || false}>
        <div className="text-center">
          <div>{statusIcon[dataAlert?.type || "success"]}</div>
          <h4 className="text-2xl mt-3 font-bold">{dataAlert?.title || "Title"}</h4>
          <p className="mt-2">{dataAlert?.description || "Description"}</p>
          {dataAlert?.type === "confirm" ? (
            <div className="flex mt-6 space-x-4">
              <div className="w-1/2">
                <Button
                  fullWidth
                  onClick={handleOk}
                  variant="contained"
                  style={{ color: "white" }}
                  className="w-full"
                >
                  Ok
                </Button>
              </div>
              <div className="w-1/2">
                <Button
                  fullWidth
                  onClick={handleClose}
                  variant="outlined"
                  className="w-full"
                >
                  Batal
                </Button>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <div>
                <Button
                  onClick={handleClose}
                  variant="text"
                  className="w-full"
                >
                  Tutup
                </Button>
              </div>
            </div>
          )}
        </div>
      </AlertCenterModal>
    )
  }