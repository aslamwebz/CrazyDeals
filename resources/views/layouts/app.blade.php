<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Crazy Deals</title>
    
    <!-- Scripts -->
    <script src="https:code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="{{ secure_asset('js/app.js') }}" defer></script>
    @if (\Request::is('admin') || \Request::is('admin/*'))  
    <link href="{{ secure_asset('css/argon.css?v=1.2.0') }}"  rel="stylesheet">
    <link href="{{ secure_asset('assets/vendor/nucleo/css/nucleo.css') }}"  rel="stylesheet">
    @endif
    

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
    <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet">

    {{-- old --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js" ></script>

    {{-- new --}}

</head>
<body>
    <div id="root">
        <div class="container-fluid">
            @yield('content')
        </div>
    </div>
</body>
</html>