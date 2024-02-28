import { CreateAPresetSchema } from "@/lib/schemas";
import { UseFormReturn } from "react-hook-form";

import { H3, Muted } from "@/components/ui/typography";
import EffectTooltip from "@/components/tooltips/effect-tooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BarChartIcon, DoubleArrowRightIcon, ImageIcon, LockClosedIcon, MoonIcon, SunIcon, VideoIcon } from "@radix-ui/react-icons";

type Props = {
  form: UseFormReturn<CreateAPresetSchema, any, undefined>,
}

export default function EffectsToggleGroup({ form }: Props) {
  const initalValues = form.getValues('effects')

  function setEffects(effect: ("Breathing" | "Confetti" | "Swipe" | "Solid" | "Twilight" | "Wave" | "Sun" | "Screen Mirror" | "Video Capture")[]) {
    form.setValue('effects', effect)
  }

  return (
    <div className="pt-6">
      <div className="pb-4">
        <H3>Add some Effects</H3>
        <Muted>Choose the effect you want to add to your preset</Muted>
      </div>
      <ToggleGroup className="py-4 flex flex-row flex-wrap" type="multiple" onValueChange={setEffects} defaultValue={initalValues}>
        <ToggleGroupItem value="Twilight" className="flex flex-col items-center justify-center">
          <EffectTooltip message="Twilight">
            <MoonIcon width={24} height={24} className="fill-current" />  
          </EffectTooltip>
        </ToggleGroupItem>
          <ToggleGroupItem value="Video Capture" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Video Capture">
              <VideoIcon width={24} height={24} className="fill-current" /> 
            </EffectTooltip>
          </ToggleGroupItem>
          <ToggleGroupItem value="Sun" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Sun">
              <SunIcon width={24} height={24} className="fill-current" />
            </EffectTooltip>
          </ToggleGroupItem>
          <ToggleGroupItem value="Confetti" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Confetti">
              <ConfettiSvg width={24} height={24} className="fill-current" />
            </EffectTooltip>
          </ToggleGroupItem>
          <ToggleGroupItem value="Breathing" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Breathing">
              <BreathingSVG width={24} height={24} className="fill-current" />
            </EffectTooltip>
          </ToggleGroupItem>
          <ToggleGroupItem value="Wave" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Wave">
              <BarChartIcon width={24} height={24} className="fill-current" />
            </EffectTooltip>
          </ToggleGroupItem>
          <ToggleGroupItem value="Swipe" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Swipe">
              <DoubleArrowRightIcon width={24} height={24} className="fill-current" />
            </EffectTooltip>
          </ToggleGroupItem>
          <ToggleGroupItem value="Solid" className="flex flex-col items-center justify-center">
            <EffectTooltip message="Solid">
              <LockClosedIcon width={24} height={24} className="fill-current" />
            </EffectTooltip>
          </ToggleGroupItem>
        <ToggleGroupItem value="Screen Mirror" className="flex flex-col items-center justify-center">
          <EffectTooltip message="Screen Mirror">
            <ImageIcon width={24} height={24} className="fill-current" />
          </EffectTooltip>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

type SVGProps = React.SVGProps<SVGSVGElement>

function ConfettiSvg(props: SVGProps) {
  return (
    <svg
      
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="confetti"
    >
      <path d="M48.511,33.189l0-.011-.477-1.1-3.108-7.219,0,0,0,0,0-.011a1.736,1.736,0,0,0-.416-.774.991.991,0,0,0-.3-.2C41.717,22.341,35.1,28.069,32.277,30.7l1.364,1.463C38.8,27.352,42,25.708,43,25.564c0,.009,0,.015,0,.024-.006.037-.018.082-.027.123-.014.063-.028.126-.05.2-.014.049-.036.1-.054.156-.027.076-.053.152-.088.236-.024.06-.054.125-.082.188-.039.088-.079.177-.126.272-.034.07-.073.145-.111.218-.051.1-.1.2-.161.3-.045.081-.093.166-.142.251-.062.108-.126.218-.2.332-.055.092-.114.186-.174.282-.072.116-.148.235-.227.356-.066.1-.136.208-.207.315-.082.123-.168.248-.256.376s-.159.229-.243.347-.187.261-.285.395-.182.249-.278.377-.206.273-.313.412-.2.266-.311.4-.229.288-.346.433-.226.282-.345.427-.245.295-.37.444-.251.3-.382.454-.269.31-.4.465-.268.309-.408.466-.3.334-.455.5-.276.306-.421.462c-.179.194-.368.392-.555.589-.127.134-.249.266-.38.4q-.485.5-1,1.019t-1.037,1.017l-.1.1c-4.842,4.634-8.77,7.081-10.087,7.281.146-.982,1.741-4.1,6.383-9.127L28.288,34.7c-3.3,3.574-8.521,9.883-6.415,11.99,0,.006.013.008.019.014a1.725,1.725,0,0,0,.757.4l.009,0,0,0h0l7.148,3.078.008.005,4,1.726c.007,0,.014,0,.02,0l23.295,10.03a2.043,2.043,0,0,0,.8.166,2,2,0,0,0,1.826-2.795Zm4.249,18.05-.268-.748.753.268a1,1,0,0,0,.652.006l.9,2.082a.985.985,0,0,0-.23.4l-.22.758-.512-.71a1,1,0,0,0-.8-.416l-.922-.009.517-.706A1,1,0,0,0,52.76,51.239ZM44.982,30.733l-.268-.747.279.1.395.915.928,2.155-.261-.363a1,1,0,0,0-.8-.416l-.922-.009.517-.7A1,1,0,0,0,44.982,30.733ZM31.547,48.411l-.269-.749.754.269a1,1,0,0,0,.926-.136l.7-.513.007.922a1,1,0,0,0,.418.807l.709.507-.761.222a1.045,1.045,0,0,0-.115.042l-2.311-.995A1.01,1.01,0,0,0,31.547,48.411Zm5.242,2.608.539-.158a1,1,0,0,0,.3-1.773l-1.968-1.407-.017-2.368a1,1,0,0,0-1.592-.8L32.2,45.868l-2.245-.8a1,1,0,0,0-1.276,1.281l.5,1.393-3.3-1.423c.051-.026.107-.063.159-.09.268-.145.543-.3.826-.474l.229-.138q.518-.321,1.059-.7c.081-.056.163-.115.244-.172q.454-.319.921-.668l.284-.213q.564-.429,1.14-.893l.214-.177q.492-.4.987-.824c.1-.089.207-.177.31-.267q.584-.5,1.164-1.028l.129-.119q.527-.479,1.043-.97c.1-.1.2-.192.3-.289q.572-.546,1.125-1.1c.368-.368.734-.745,1.1-1.126q.152-.157.3-.318.45-.474.89-.956c.07-.077.142-.153.212-.231q.523-.579,1.027-1.162c.085-.1.167-.2.251-.294q.4-.47.784-.938c.082-.1.164-.2.244-.3.314-.389.618-.776.907-1.158.044-.057.084-.114.127-.171.249-.331.484-.657.71-.978.051-.073.1-.146.154-.218l.2.551-1.355,1.848a1,1,0,0,0,.8,1.591l2.365.023,1.416,1.965a1,1,0,0,0,.811.416.974.974,0,0,0,.169-.015.988.988,0,0,0,.587-.345l5.226,12.134L51.171,47.9A1,1,0,0,0,49.9,49.179l.8,2.236-1.354,1.849a1,1,0,0,0,.8,1.59l2.364.024,1.416,1.965a1,1,0,0,0,.811.416.968.968,0,0,0,.17-.015,1,1,0,0,0,.791-.707l.279-.961,1.956,4.543Z"></path><path d="M29.6 33.319l1.433 1.395c.243-.25.49-.5.806-.817l.2-.194-1.4-1.426-.274.272C30.1 32.806 29.848 33.064 29.6 33.319zM48.236 44.141l-1.97-1.414-.019-2.369a1 1 0 0 0-1.593-.8l-1.843 1.358-2.243-.8A1 1 0 0 0 39.29 41.4l.8 2.243-1.358 1.841a1 1 0 0 0 .8 1.594l2.369.019 1.413 1.971a1 1 0 0 0 .812.416.952.952 0 0 0 .168-.014 1 1 0 0 0 .792-.7l.644-2.2 2.2-.645a1 1 0 0 0 .3-1.772zm-3.594.65a1 1 0 0 0-.68.68l-.221.759-.514-.715a1 1 0 0 0-.8-.417l-.917-.007.511-.693a1 1 0 0 0 .137-.929l-.271-.757.757.269a1 1 0 0 0 .929-.136l.693-.511.007.917a1 1 0 0 0 .417.8l.716.513zM31.573 9.753a1 1 0 0 0 .886.553l2.369.018L36.241 12.3a1 1 0 0 0 .813.417.971.971 0 0 0 .168-.015 1 1 0 0 0 .792-.7l.644-2.2 2.2-.644a1 1 0 0 0 .3-1.773L39.194 5.957l-.018-2.368a1 1 0 0 0-1.594-.8L35.74 4.149 33.5 3.35a.989.989 0 0 0-1.043.234 1 1 0 0 0-.235 1.043l.8 2.243L31.663 8.712A1 1 0 0 0 31.573 9.753zM35.083 6.7l-.271-.757.757.27a1 1 0 0 0 .929-.137l.693-.51.007.916a1 1 0 0 0 .417.8l.716.514-.76.222a1 1 0 0 0-.679.679l-.223.76-.513-.716a1 1 0 0 0-.8-.417l-.917-.007.511-.692A1 1 0 0 0 35.083 6.7zM7.4 14.425a1 1 0 0 0 .887.553L10.652 15l1.413 1.971a1 1 0 0 0 .812.417.954.954 0 0 0 .168-.015 1 1 0 0 0 .792-.7l.644-2.2 2.205-.645a1 1 0 0 0 .3-1.772l-1.97-1.414L15 8.261a1 1 0 0 0-1.593-.8L11.564 8.821l-2.243-.8A1 1 0 0 0 8.043 9.3l.8 2.243L7.486 13.384A1 1 0 0 0 7.4 14.425zm3.511-3.054l-.271-.757.757.27a1 1 0 0 0 .929-.137l.693-.511.007.917a1 1 0 0 0 .417.8l.716.514-.76.221a1 1 0 0 0-.68.68l-.221.76-.514-.716a1 1 0 0 0-.8-.417l-.917-.007.51-.692A1 1 0 0 0 10.907 11.371zM12.825 40.542a.991.991 0 0 0-.959-.415L9.6 40.449l-1.6-1.768a1 1 0 0 0-1.731.519l-.358 2.355-2.069.978a1 1 0 0 0-.054 1.782L5.87 45.453l.31 2.4a1 1 0 0 0 .672.82 1 1 0 0 0 1.032-.245L9.5 46.8l2.246.478a1 1 0 0 0 1.107-1.418l-1.065-2.178 1.107-2.093A1 1 0 0 0 12.825 40.542zM9.765 44.1l.386.791-.774-.165a.992.992 0 0 0-.92.276l-.556.563-.113-.873a1 1 0 0 0-.511-.749l-.8-.44.777-.367a1 1 0 0 0 .561-.754l.121-.794.538.6a.993.993 0 0 0 .883.32l.852-.121-.428.808A1 1 0 0 0 9.765 44.1zM19.045 21.235a1 1 0 0 0 0 1.414l8.485 8.486a1 1 0 1 0 1.414-1.414l-8.485-8.486A1 1 0 0 0 19.045 21.235zM11.762 31.448a1 1 0 0 0 .525 1.313L22.186 37a.979.979 0 0 0 .394.081 1 1 0 0 0 .394-1.919l-9.9-4.243A1 1 0 0 0 11.762 31.448zM29.257 13.952a1 1 0 0 0-.525 1.313l4.243 9.9a1 1 0 1 0 1.838-.787l-4.243-9.9A1 1 0 0 0 29.257 13.952z"></path><rect width="2" height="2" x="9.095" y="22.77" transform="rotate(-45.008 10.095 23.77)"></rect><rect width="2" height="2" x="24.409" y="19.528" transform="rotate(-45 25.408 20.529)"></rect><rect width="2" height="2" x="22.287" y="31.135" transform="rotate(-44.998 23.287 32.135)"></rect><rect width="2" height="2" x="39.258" y="17.407" transform="rotate(-44.998 40.257 18.407)"></rect><rect width="2" height="2" x="23.53" y="6.336" transform="rotate(-45.01 24.53 7.335)"></rect><rect width="2" height="2.001" x="3.903" y="34.377" transform="rotate(-44.992 4.902 35.378)"></rect><polygon points="44.5 15.578 45.915 14.164 47.329 15.578 48.743 14.164 47.329 12.75 48.743 11.336 47.329 9.922 45.915 11.336 44.5 9.922 43.086 11.336 44.501 12.75 43.086 14.164 44.5 15.578"></polygon><polygon points="17.63 48.105 16.216 49.52 14.802 48.105 13.388 49.52 14.802 50.934 13.388 52.348 14.802 53.762 16.216 52.348 17.63 53.762 19.044 52.348 17.63 50.934 19.044 49.52 17.63 48.105"></polygon>
    </svg>
  )
}
function BreathingSVG(props: SVGProps) {
  return (
    <svg color="white" {...props} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="wind"><g data-name="<Group>"><path d="M37,185H263.923a59.7,59.7,0,0,0-.172-119.4,8,8,0,1,0,0,16,43.7,43.7,0,0,1,.172,87.4H37a8,8,0,0,0,0,16Z" data-name="<Path>"></path><path d="M37 231H376.941a59.428 59.428 0 1 0-.171-118.856 8 8 0 0 0 0 16A43.428 43.428 0 1 1 376.941 215H37a8 8 0 0 0 0 16zM423.666 271H37a8 8 0 0 0 0 16H423.666a43.432 43.432 0 1 1 .012 86.864 8 8 0 0 0 0 16A59.432 59.432 0 1 0 423.666 271z" data-name="<Path>"></path><path d="M225.885,328H37a8,8,0,0,0,0,16H225.885a43.31,43.31,0,1,1,.011,86.618,8,8,0,0,0,0,16A59.31,59.31,0,1,0,225.885,328Z" data-name="<Path>"></path></g></svg>
  )
}