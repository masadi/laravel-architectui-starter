@extends('layouts.auth')

@section('content')
<div class="h-100 bg-premium-dark">
    <div class="d-flex h-100 justify-content-center align-items-center">
        <div class="mx-auto app-login-box col-md-8">
            <div class="app-logo-inverse mx-auto mb-3"></div>
            <div class="modal-dialog w-100">
                <form method="POST" action="{{ route('password.email') }}">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h5 class="modal-title mt-2">
                                <div>Lost Password</div>
                            </h5>
                            <div class="divider row"></div>

                            @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                            @endif


                            @csrf

                            <div class="form-row">
                                <div class="col-md-12">
                                    <div class="position-relative form-group">
                                        <input id="email" type="email"
                                            class="form-control @error('email') is-invalid @enderror" name="email"
                                            value="{{ old('email') }}" required autocomplete="email" autofocus
                                            placeholder="Email here...">

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="divider row"></div>
                            <h6 class="mb-0">Already have an account? <a href="{{route('login')}}"
                                    class="text-primary">Sign in</a></h6>
                        </div>
                        <div class="modal-footer d-block text-center">
                            <button type="submit" class="btn btn-primary">
                                {{ __('Send Password Reset Link') }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection