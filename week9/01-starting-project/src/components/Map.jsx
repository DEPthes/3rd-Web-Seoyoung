import { useEffect, useRef } from "react";

function Map({ center, zoom, markerPosition }) {
  const mapRef = useRef();
  const mapInstanceRef = useRef(); //Map
  const markerRef = useRef(); //Marker

  useEffect(() => {
    //초기화
    mapInstanceRef.current = new google.maps.Map(mapRef.current, {
      center,
      zoom,
    }); //mapRef.current에 지도 렌더링

    markerRef.current = new google.maps.Marker({
      map: mapInstanceRef.current,
    });
  }, []);

  useEffect(() => {
    if (markerPosition) {
      markerRef.current.setPosition(markerPosition); //마커 위치 설정
      markerRef.current.setMap(mapInstanceRef.current); //마커가 표시될 지도 설정
      mapInstanceRef.current.setCenter(markerPosition); //중심을 마커 위치로 설정
      mapInstanceRef.current.setZoom(8); // 선택된 장소에 더 가까이 줌인
    } else {
      markerRef.current.setMap(null);
    }
  }, [markerPosition]); // 마커 위치가 변경될 때마다

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
}

export default Map;
