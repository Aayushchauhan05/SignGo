
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Communicaton() {
  return (
    (<div className="flex justify-evenly h-screen">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-xl p-6 ml-6">
        <div className="flex flex-col items-center space-y-4">
          <div
            className="bg-muted rounded-full w-32 h-32 flex items-center justify-center">
            <CameraIcon className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="text-lg font-medium">Hold your hand up to the camera</p>
          <p className="text-muted-foreground text-sm">
            Your sign language gestures will be translated to text and speech
          </p>
        </div>
        <div className="mt-6 border-t pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Listening...</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Volume2Icon className="h-6 w-6" />
                <span className="sr-only">Adjust Volume</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MicIcon className="h-6 w-6" />
                <span className="sr-only">Mute Microphone</span>
              </Button>
            </div>
          </div>
          <div className="mt-4 bg-muted/20 rounded-lg p-4">
            <p className="text-sm">
              Hello, how are you doing today? I'm excited to try out this sign language translator app.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-lg w-full max-w-xl p-6">
        <div className="flex flex-col items-center space-y-4">
          <div
            className="bg-muted rounded-full w-32 h-32 flex items-center justify-center">
            <MicIcon className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="text-lg font-medium">Voice Detection</p>
          <p className="text-muted-foreground text-sm">Your voice will be detected and translated to text</p>
        </div>
        <div className="mt-6 border-t pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Speaking...</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Volume2Icon className="h-6 w-6" />
                <span className="sr-only">Adjust Volume</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MicIcon className="h-6 w-6" />
                <span className="sr-only">Mute Microphone</span>
              </Button>
            </div>
          </div>
          <div className="mt-4 bg-muted/20 rounded-lg p-4">
            <p className="text-sm">This is a test of the voice detection feature. Can you hear me clearly?</p>
          </div>
          <div
            className="mt-4 bg-muted/20 rounded-lg p-4 flex items-center justify-center w-[200px] mx-auto">
            <img
              src="/placeholder.svg"
              width={200}
              height={200}
              alt="ISL Translation"
              className="object-cover w-full"
              style={{ aspectRatio: "200/200", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>)
  );
}

function CameraIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>)
  );
}


function MicIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>)
  );
}


function Volume2Icon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>)
  );
}
